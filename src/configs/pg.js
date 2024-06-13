const { Pool } = require('pg')

const pool = new Pool({
  user: 'admin',
  host: 'gymdb',
  database: 'gymdb',
  password: 'masterkey',
  port: 5432,
})

module.exports = { query: (text, params) => pool.query(text, params) }
