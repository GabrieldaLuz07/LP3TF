const db = require('../configs/pg')

const sql_get = `SELECT * FROM status`

//GET
const getStatus = async () => {
  let status = {}
  await db.query(sql_get)
  .then(ret => status = { total: ret.rows.length, status: ret.rows })
  .catch(err => status = err.stack)
  return status
}

//POST
const sql_insert = `INSERT INTO status (id_status, situacao) 
                          VALUES ($1, $2) `
const postStatus = async (params) => {
  const { id_status, situacao } = params
  await db.query(sql_insert, [id_status, situacao])
}

//DELETE
const sql_delete = `DELETE FROM status WHERE id_status = $1`
const deleteStatus = async (params) => {
  const { id_status } = params
  await db.query(sql_delete, [id_status])
}

//PUT
const sql_put =
  `UPDATE status
    SET
      situacao = $2
    WHERE id_status = $1`
const putStatus = async (params) => {
  const { id_status, situacao } = params
  return await db.query(sql_put, [id_status, situacao])
}

const getById = async (id_status) => {
  const result = await db.query('SELECT * FROM status WHERE id_status = $1', [id_status]);
  return result.rowCount > 0;
};

module.exports.getStatus = getStatus
module.exports.postStatus = postStatus
module.exports.deleteStatus = deleteStatus
module.exports.putStatus = putStatus
module.exports.getById = getById