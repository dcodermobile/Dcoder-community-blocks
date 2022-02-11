const sql = require('mssql')

const main = async (inputs, auths, context) => {
  const query = inputs.query
  const { host, port, username, password, database } = inputs
  const sqlConfig = {
    user: username,
    password,
    database,
    server: host,
    port,
    pool: {
      max: 5,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }
  let pool = await sql.connect(sqlConfig)
  let res = await pool.request().query(query)
  output.data = res
  return output
}

module.exports.main = main
