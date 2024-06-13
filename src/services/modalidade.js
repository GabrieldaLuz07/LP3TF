const db = require('../configs/pg')

const sql_get = `SELECT * FROM modalidade`

//GET
const getModalidade = async () => {
  let modalidade = {}
  await db.query(sql_get)
  .then(ret => modalidade = { total: ret.rows.length, modalidades: ret.rows })
  .catch(err => modalidade = err.stack)
  return modalidade
}

//POST
const sql_insert = `INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7) `
const postModalidade = async (params) => {
  const { id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana } = params
  await db.query(sql_insert, [id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana])
}

//DELETE
const sql_delete = `DELETE FROM modalidade WHERE id_modalidade = $1`
const deleteModalidade = async (params) => {
  const { id_modalidade } = params
  await db.query(sql_delete, [id_modalidade])
}

//PUT
const sql_put =
  `UPDATE modalidade
    SET
      nome = $2,
      descricao = $3,
      hora_inicio = $4,
      hora_fim = $5,
      capacidademaxima = $6,
      diassemana = $7
    WHERE id_modalidade = $1`
const putModalidade = async (params) => {
  const { id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana } = params
  return await db.query(sql_put, [id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana])
}

//PATCH
const sql_patch = 
  `UPDATE modalidade SET `
const patchModalidade = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_modalidade)
  let countParams = 1
  if (params.nome) {
    countParams ++
    fields += ` nome = $${countParams} `
    binds.push(params.nome)
  }
  if (params.descricao) {
    countParams ++
    fields += (fields?',':'') + ` descricao = $${countParams} `
    binds.push(params.descricao)
  }
  if (params.hora_inicio) {
    countParams ++
    fields += (fields?',':'') + ` hora_inicio = $${countParams} `
    binds.push(params.hora_inicio)
  }
  if (params.hora_fim) {
    countParams ++
    fields += (fields?',':'') + ` hora_fim = $${countParams} `
    binds.push(params.hora_fim)
  }
  if (params.capacidademaxima) {
    countParams ++
    fields += (fields?',':'') + ` capacidademaxima = $${countParams} `
    binds.push(params.capacidademaxima)
  }
  if (params.diassemana) {
    countParams ++
    fields += (fields?',':'') + ` diassemana = $${countParams} `
    binds.push(params.diassemana)
  }
  let sql = sql_patch + fields + ' WHERE id_modalidade = $1 '
  return await db.query(sql, binds)
}

module.exports.getModalidade = getModalidade
module.exports.postModalidade = postModalidade
module.exports.deleteModalidade = deleteModalidade
module.exports.putModalidade = putModalidade
module.exports.patchModalidade = patchModalidade