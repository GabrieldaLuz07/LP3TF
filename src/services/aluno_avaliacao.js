const db = require('../configs/pg')

const sql_get = `SELECT * FROM aluno_avaliacao`

//GET
const getAluno_avaliacao = async () => {
  let aluno_avaliacao = {}
  await db.query(sql_get)
  .then(ret => aluno_avaliacao = { total: ret.rows.length, aluno_avaliacaos: ret.rows })
  .catch(err => aluno_avaliacao = err.stack)
  return aluno_avaliacao
}

//POST
const sql_insert = `INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7) `
const postAluno_avaliacao = async (params) => {
  const { id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas } = params
  await db.query(sql_insert, [id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas])
}

//DELETE
const sql_delete = `DELETE FROM aluno_avaliacao WHERE id_avaliacao = $1`
const deleteAluno_avaliacao = async (params) => {
  const { id_avaliacao } = params
  await db.query(sql_delete, [id_avaliacao])
}

//PUT
const sql_put =
  `UPDATE aluno_avaliacao
    SET
      data_avaliacao = $2,
      altura = $3,
      peso = $4,
      ombros = $5,
      peitoral = $6,
      abdomen = $7,
      quadril = $8,
      bracos = $9,
      pernas = $10
    WHERE id_avaliacao = $1`
const putAluno_avaliacao = async (params) => {
  const { id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas } = params
  return await db.query(sql_put, [id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas])
}

//PATCH
const sql_patch = 
  `UPDATE aluno_avaliacao SET `
const patchAluno_avaliacao = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_avaliacao)
  let countParams = 1
  if (params.data_avaliacao) {
    countParams ++
    fields += ` data_avaliacao = $${countParams} `
    binds.push(params.data_avaliacao)
  }
  if (params.altura) {
    countParams ++
    fields += (fields?',':'') + ` altura = $${countParams} `
    binds.push(params.altura)
  }
  if (params.peso) {
    countParams ++
    fields += (fields?',':'') + ` peso = $${countParams} `
    binds.push(params.peso)
  }
  if (params.ombros) {
    countParams ++
    fields += (fields?',':'') + ` ombros = $${countParams} `
    binds.push(params.ombros)
  }
  if (params.peitoral) {
    countParams ++
    fields += (fields?',':'') + ` peitoral = $${countParams} `
    binds.push(params.peitoral)
  }
  if (params.abdomen) {
    countParams ++
    fields += (fields?',':'') + ` abdomen = $${countParams} `
    binds.push(params.abdomen)
  }
  if (params.quadril) {
    countParams ++
    fields += (fields?',':'') + ` quadril = $${countParams} `
    binds.push(params.quadril)
  }
  if (params.bracos) {
    countParams ++
    fields += (fields?',':'') + ` bracos = $${countParams} `
    binds.push(params.bracos)
  }
  if (params.pernas) {
    countParams ++
    fields += (fields?',':'') + ` pernas = $${countParams} `
    binds.push(params.pernas)
  }
  let sql = sql_patch + fields + ' WHERE id_avaliacao = $1 '
  return await db.query(sql, binds)
}

module.exports.getAluno_avaliacao = getAluno_avaliacao
module.exports.postAluno_avaliacao = postAluno_avaliacao
module.exports.deleteAluno_avaliacao = deleteAluno_avaliacao
module.exports.putAluno_avaliacao = putAluno_avaliacao
module.exports.patchAluno_avaliacao = patchAluno_avaliacao