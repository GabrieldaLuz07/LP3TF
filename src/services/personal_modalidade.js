const db = require('../configs/pg')

const sql_get = `SELECT * FROM personal_modalidade`

//GET
const getPersonal_modalidade = async () => {
  let personal_modalidade = {}
  await db.query(sql_get)
  .then(ret => personal_modalidade = { total: ret.rows.length, personal_modalidades: ret.rows })
  .catch(err => personal_modalidade = err.stack)
  return personal_modalidade
}

//POST
const sql_insert = `INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
                          VALUES ($1, $2, $3, $4, $5, $6) `
const postPersonal_modalidade = async (params) => {
  const { id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status } = params
  await db.query(sql_insert, [id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status])
}

//DELETE
const sql_delete = `DELETE FROM personal_modalidade WHERE id_personal_modalidade = $1`
const deletePersonal_modalidade = async (params) => {
  const { id_personal_modalidade } = params
  await db.query(sql_delete, [id_personal_modalidade])
}

//PUT
const sql_put =
  `UPDATE personal_modalidade
    SET
      id_personal = $2,
      id_modalidade = $3,
      hora_entrada = $4,
      hora_saida = $5,
      id_status = $6
    WHERE id_personal_modalidade = $1`
const putPersonal_modalidade = async (params) => {
  const { id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status } = params
  return await db.query(sql_put, [id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status])
}

//PATCH
const sql_patch = 
  `UPDATE personal_modalidade SET `
const patchPersonal_modalidade = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_personal_modalidade)
  let countParams = 1
  if (params.id_personal) {
    countParams ++
    fields += ` id_personal = $${countParams} `
    binds.push(params.id_personal)
  }
  if (params.id_modalidade) {
    countParams ++
    fields += (fields?',':'') + ` id_modalidade = $${countParams} `
    binds.push(params.id_modalidade)
  }
  if (params.hora_entrada) {
    countParams ++
    fields += (fields?',':'') + ` hora_entrada = $${countParams} `
    binds.push(params.hora_entrada)
  }
  if (params.hora_saida) {
    countParams ++
    fields += (fields?',':'') + ` hora_saida = $${countParams} `
    binds.push(params.hora_saida)
  }
  if (params.id_status) {
    countParams ++
    fields += (fields?',':'') + ` id_status = $${countParams} `
    binds.push(params.id_status)
  }
  let sql = sql_patch + fields + ' WHERE id_personal_modalidade = $1 '
  return await db.query(sql, binds)
}

module.exports.getPersonal_modalidade = getPersonal_modalidade
module.exports.postPersonal_modalidade = postPersonal_modalidade
module.exports.deletePersonal_modalidade = deletePersonal_modalidade
module.exports.putPersonal_modalidade = putPersonal_modalidade
module.exports.patchPersonal_modalidade = patchPersonal_modalidade