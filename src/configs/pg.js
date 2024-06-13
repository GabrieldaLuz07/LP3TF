const { Pool } = require('pg')

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'gymdb',
  password: 'masterkey',
  port: 5435,
})

module.exports = { query: (text, params) => pool.query(text, params) }
