const oracledb = require('oracledb')

const main = async (inputs, auths, context) => {
  const query = inputs.query
  const parameters = inputs.parameters
  const { connectionString, port, username, password, database } = inputs

  let connection = await oracledb.getConnection({
    user: username,
    password,
    connectString: connectionString
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
