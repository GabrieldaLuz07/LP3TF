const db = require('../configs/pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const sql_getLogin = `SELECT cpf, senha FROM aluno WHERE cpf = $1`;

const userAuthentication = async (params) => {
    try {
        const result = await db.query(sql_getLogin, [params.cpf]);

        if (result.rows.length === 0) {
            throw { status: 404, message: 'Usuário não encontrado' };
        }

        const usuario = result.rows[0];

        const isPasswordValid = await bcrypt.compare(params.senha, usuario.senha);

        if (isPasswordValid) {
            const privateKeyPath = path.join(__dirname, '../private/private_key.pem');
            const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
            const token = jwt.sign({ usuario: usuario.cpf }, privateKey, { algorithm: 'RS256', expiresIn: '7d' });
            return { success: true, message: 'Usuário logado com sucesso', usuario: usuario.cpf, token: token };
        } else {
            return { success: false, message: 'Usuário sem acesso' };
        }
    } catch (error) {
        if (error.status) {
            throw error;
        }
        throw new Error('Erro ao autenticar usuário');
    }
};

module.exports.userAuthentication = userAuthentication;