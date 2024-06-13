const db = require('../configs/pg');
const bcrypt = require('bcrypt');

const sql_get = `SELECT * FROM aluno`

//GET
const getAluno = async () => {
  let aluno = {}
  await db.query(sql_get)
  .then(ret => aluno = { total: ret.rows.length, alunos: ret.rows })
  .catch(err => aluno = err.stack)
  return aluno
}

//POST
const sql_insert = `INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) `
const postAluno = async (params) => {
  const { id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status } = params;
  const senhaCriptografada = await bcrypt.hash(senha, 10);
  await db.query(sql_insert, [id_aluno, nome, cpf, senhaCriptografada, nascimento, sexo, endereco, telefone, id_plano, id_status ]);
}

//DELETE
const sql_delete = `DELETE FROM aluno WHERE id_aluno = $1`
const deleteAluno = async (params) => {
  const { id_aluno } = params
  await db.query(sql_delete, [id_aluno])
}

//PUT
const sql_put =
  `UPDATE aluno
    SET
      nome = $2,
      cpf = $3,
      senha = $4,
      nascimento = $5,
      sexo = $6,
      endereco = $7,
      telefone = $8,
      id_plano = $9,
      id_status = $10
    WHERE id_aluno = $1`
const putAluno = async (params) => {
  const { id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status } = params
  return await db.query(sql_put, [id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status])
}

//PATCH
const sql_patch = 
  `UPDATE aluno SET `
const patchAluno = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_aluno)
  let countParams = 1
  if (params.nome) {
    countParams ++
    fields += ` nome = $${countParams} `
    binds.push(params.nome)
  }
  if (params.cpf) {
    countParams ++
    fields += (fields?',':'') + ` cpf = $${countParams} `
    binds.push(params.cpf)
  }
  if (params.senha) {
    countParams ++
    fields += (fields?',':'') + ` senha = $${countParams} `
    binds.push(params.senha)
  }
  if (params.nascimento) {
    countParams ++
    fields += (fields?',':'') + ` nascimento = $${countParams} `
    binds.push(params.nascimento)
  }
  if (params.sexo) {
    countParams ++
    fields += (fields?',':'') + ` sexo = $${countParams} `
    binds.push(params.sexo)
  }
  if (params.endereco) {
    countParams ++
    fields += (fields?',':'') + ` endereco = $${countParams} `
    binds.push(params.endereco)
  }
  if (params.telefone) {
    countParams ++
    fields += (fields?',':'') + ` telefone = $${countParams} `
    binds.push(params.telefone)
  }
  if (params.id_plano) {
    countParams ++
    fields += (fields?',':'') + ` id_plano = $${countParams} `
    binds.push(params.id_plano)
  }
  if (params.id_status) {
    countParams ++
    fields += (fields?',':'') + ` id_status = $${countParams} `
    binds.push(params.id_status)
  }
  let sql = sql_patch + fields + ' WHERE id_aluno = $1 '
  return await db.query(sql, binds)
}

const getById = async (id_aluno) => {
  const result = await db.query('SELECT * FROM aluno WHERE id_aluno = $1', [id_aluno]);
  return result.rowCount > 0;
};

module.exports.getAluno = getAluno
module.exports.postAluno = postAluno
module.exports.deleteAluno = deleteAluno
module.exports.putAluno = putAluno
module.exports.patchAluno = patchAluno
module.exports.getById = getById