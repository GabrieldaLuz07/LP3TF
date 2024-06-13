const db = require('../configs/pg')

// SQL queries
const sql_get = `SELECT * FROM aluno_plano`

// GET
const getAluno_plano = async () => {
  let aluno_plano = {}
  await db.query(sql_get)
  .then(ret => aluno_plano = { total: ret.rows.length, aluno_planos: ret.rows })
  .catch(err => aluno_plano = err.stack)
  return aluno_plano
}

// POST
const sql_insert = `INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
                          VALUES ($1, $2, $3, $4, $5, $6) `
const postAluno_plano = async (params) => {
  const { id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao } = params
  await db.query(sql_insert, [id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao])
}

// DELETE
const sql_delete = `DELETE FROM aluno_plano WHERE id_aluno_plano = $1`
const deleteAluno_plano = async (params) => {
  const { id_aluno_plano } = params
  await db.query(sql_delete, [id_aluno_plano])
}

// PUT
const sql_put =
  `UPDATE aluno_plano
    SET
      id_aluno = $2,
      id_plano = $3,
      data_inicio = $4,
      data_fim = $5,
      observacao = $6
    WHERE id_aluno_plano = $1`
const putAluno_plano = async (params) => {
  const { id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao } = params
  return await db.query(sql_put, [id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao])
}

// PATCH
const sql_patch = 
  `UPDATE aluno_plano SET `
const patchAluno_plano = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_aluno_plano)
  let countParams = 1
  if (params.id_aluno) {
    countParams ++
    fields += ` id_aluno = $${countParams} `
    binds.push(params.id_aluno)
  }
  if (params.id_plano) {
    countParams ++
    fields += (fields?',':'') + ` id_plano = $${countParams} `
    binds.push(params.id_plano)
  }
  if (params.data_inicio) {
    countParams ++
    fields += (fields?',':'') + ` data_inicio = $${countParams} `
    binds.push(params.data_inicio)
  }
  if (params.data_fim) {
    countParams ++
    fields += (fields?',':'') + ` data_fim = $${countParams} `
    binds.push(params.data_fim)
  }
  if (params.observacao) {
    countParams ++
    fields += (fields?',':'') + ` observacao = $${countParams} `
    binds.push(params.observacao)
  }
  let sql = sql_patch + fields + ' WHERE id_aluno_plano = $1 '
  return await db.query(sql, binds)
}

module.exports.getAluno_plano = getAluno_plano
module.exports.postAluno_plano = postAluno_plano
module.exports.deleteAluno_plano = deleteAluno_plano
module.exports.putAluno_plano = putAluno_plano
module.exports.patchAluno_plano = patchAluno_plano