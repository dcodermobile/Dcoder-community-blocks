const mysql = require('mysql2/promise')

const main = async (inputs, auths, context) => {
  const query = inputs.query
  const parameters = inputs.parameters
  const { host, port, username, password, database } = inputs

  const connection = await mysql.createConnection({
    host,
    port,
    user: username,
    password,
    database
  })
  let res = null
  if (parameters && parameters.length > 0) {
    res = await connection.execute(query, parameters)
  } else {
    res = await connection.execute(query)
  }
  output.data = res
  return output
}

module.exports.main = main
