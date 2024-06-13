const db = require('../configs/pg')

const sql_get = `SELECT * FROM personal`

//GET
const getPersonal = async () => {
  let personal = {}
  await db.query(sql_get)
  .then(ret => personal = { total: ret.rows.length, personals: ret.rows })
  .catch(err => personal = err.stack)
  return personal
}

//POST
const sql_insert = `INSERT INTO personal (id_personal, nome, cpf, nascimento, sexo, cref, telefone) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7) `
const postPersonal = async (params) => {
  const { id_personal, nome, cpf, nascimento, sexo, cref, telefone } = params
  await db.query(sql_insert, [id_personal, nome, cpf, nascimento, sexo, cref, telefone])
}

//DELETE
const sql_delete = `DELETE FROM personal WHERE id_personal = $1`
const deletePersonal = async (params) => {
  const { id_personal } = params
  await db.query(sql_delete, [id_personal])
}

//PUT
const sql_put =
  `UPDATE personal
    SET
      nome = $2,
      cpf = $3,
      nascimento = $4,
      sexo = $5,
      cref = $6,
      telefone = $7
    WHERE id_personal = $1`
const putPersonal = async (params) => {
  const { id_personal, nome, cpf, nascimento, sexo, cref, telefone } = params
  return await db.query(sql_put, [id_personal, nome, cpf, nascimento, sexo, cref, telefone])
}

//PATCH
const sql_patch = 
  `UPDATE personal SET `
const patchPersonal = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_personal)
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
  if (params.cref) {
    countParams ++
    fields += (fields?',':'') + ` cref = $${countParams} `
    binds.push(params.cref)
  }
  if (params.telefone) {
    countParams ++
    fields += (fields?',':'') + ` telefone = $${countParams} `
    binds.push(params.telefone)
  }
  let sql = sql_patch + fields + ' WHERE id_personal = $1 '
  return await db.query(sql, binds)
}

const getById = async (id_personal) => {
  const result = await db.query('SELECT * FROM personal WHERE id_personal = $1', [id_personal]);
  return result.rowCount > 0;
};

module.exports.getPersonal = getPersonal
module.exports.postPersonal = postPersonal
module.exports.deletePersonal = deletePersonal
module.exports.putPersonal = putPersonal
module.exports.patchPersonal = patchPersonal
module.exports.getById = getById