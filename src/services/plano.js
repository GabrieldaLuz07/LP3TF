const db = require('../configs/pg')

// SQL queries
const sql_get = `SELECT * FROM plano`

// GET
const getPlano = async () => {
  let plano = {}
  await db.query(sql_get)
  .then(ret => plano = { total: ret.rows.length, planos: ret.rows })
  .catch(err => plano = err.stack)
  return plano
}

// POST
const sql_insert = `INSERT INTO plano (nome, valor, periodo, id_modalidade, id_status) 
                          VALUES ($1, $2, $3, $4, $5) `
const postPlano = async (params) => {
  const { nome, valor, periodo, id_modalidade, id_status } = params
  await db.query(sql_insert, [nome, valor, periodo, id_modalidade, id_status])
}

// DELETE
const sql_delete = `DELETE FROM plano WHERE id_plano = $1`
const deletePlano = async (params) => {
  const { id_plano } = params
  await db.query(sql_delete, [id_plano])
}

// PUT
const sql_put =
  `UPDATE plano
    SET
      nome = $2,
      valor = $3,
      periodo = $4,
      id_modalidade = $5,
      id_status = $6
    WHERE id_plano = $1`
const putPlano = async (params) => {
  const { id_plano, nome, valor, periodo, id_modalidade, id_status } = params
  return await db.query(sql_put, [id_plano, nome, valor, periodo, id_modalidade, id_status])
}

// PATCH
const sql_patch = 
  `UPDATE plano SET `
const patchPlano = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_plano)
  let countParams = 1
  if (params.nome) {
    countParams ++
    fields += ` nome = $${countParams} `
    binds.push(params.nome)
  }
  if (params.valor) {
    countParams ++
    fields += (fields?',':'') + ` valor = $${countParams} `
    binds.push(params.valor)
  }
  if (params.periodo) {
    countParams ++
    fields += (fields?',':'') + ` periodo = $${countParams} `
    binds.push(params.periodo)
  }
  if (params.id_modalidade) {
    countParams ++
    fields += (fields?',':'') + ` id_modalidade = $${countParams} `
    binds.push(params.id_modalidade)
  }
  if (params.id_status) {
    countParams ++
    fields += (fields?',':'') + ` id_status = $${countParams} `
    binds.push(params.id_status)
  }
  let sql = sql_patch + fields + ' WHERE id_plano = $1 '
  return await db.query(sql, binds)
}

const getById = async (id_plano) => {
  const result = await db.query('SELECT * FROM plano WHERE id_plano = $1', [id_plano]);
  return result.rowCount > 0;
};

module.exports.getPlano = getPlano
module.exports.postPlano = postPlano
module.exports.deletePlano = deletePlano
module.exports.putPlano = putPlano
module.exports.patchPlano = patchPlano
module.exports.getById = getById