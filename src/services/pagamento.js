const db = require('../configs/pg')

const sql_get = `SELECT * FROM pagamento`

//GET
const getPagamento = async () => {
  let pagamento = {}
  await db.query(sql_get)
  .then(ret => pagamento = { total: ret.rows.length, pagamentos: ret.rows })
  .catch(err => pagamento = err.stack)
  return pagamento
}

//POST
const sql_insert = `INSERT INTO pagamento (pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
                          VALUES ($1, $2, $3, $4, $5, $6) `
const postPagamento = async (params) => {
  const { pago, data_limite, data_pagamento, parcela, id_plano, id_aluno } = params
  await db.query(sql_insert, [pago, data_limite, data_pagamento, parcela, id_plano, id_aluno])
}

//DELETE
const sql_delete = `DELETE FROM pagamento WHERE id_pagamento = $1`
const deletePagamento = async (params) => {
  const { id_pagamento } = params
  await db.query(sql_delete, [id_pagamento])
}

//PUT
const sql_put =
  `UPDATE pagamento
    SET
      pago = $2,
      data_limite = $3,
      data_pagamento = $4,
      parcela = $5,
      id_plano = $6,
      id_aluno = $7
    WHERE id_pagamento = $1`
const putPagamento = async (params) => {
  const { id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno } = params
  return await db.query(sql_put, [id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno])
}

//PATCH
const sql_patch = `UPDATE pagamento SET `
const patchPagamento = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id_pagamento)
  let countParams = 1
  if (params.pago !== undefined) {
    countParams++
    fields += ` pago = $${countParams} `
    binds.push(params.pago)
  }
  if (params.data_limite) {
    countParams++
    fields += (fields ? ',' : '') + ` data_limite = $${countParams} `
    binds.push(params.data_limite)
  }
  if (params.data_pagamento) {
    countParams++
    fields += (fields ? ',' : '') + ` data_pagamento = $${countParams} `
    binds.push(params.data_pagamento)
  }
  if (params.parcela) {
    countParams++
    fields += (fields ? ',' : '') + ` parcela = $${countParams} `
    binds.push(params.parcela)
  }
  if (params.id_plano) {
    countParams++
    fields += (fields ? ',' : '') + ` id_plano = $${countParams} `
    binds.push(params.id_plano)
  }
  if (params.id_aluno) {
    countParams++
    fields += (fields ? ',' : '') + ` id_aluno = $${countParams} `
    binds.push(params.id_aluno)
  }
  let sql = sql_patch + fields + ' WHERE id_pagamento = $1 '
  return await db.query(sql, binds)
}

module.exports.getPagamento = getPagamento
module.exports.postPagamento = postPagamento
module.exports.deletePagamento = deletePagamento
module.exports.putPagamento = putPagamento
module.exports.patchPagamento = patchPagamento