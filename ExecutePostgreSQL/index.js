const { Pool, Client } = require('pg')

const main = async (inputs, auths, context) => {
  const connectionURI = inputs.connectionURI
  const query = inputs.query
  const parameters = inputs.parameters

  console.log(connectionURI)
  /*const pool = new Pool({
    connectionURI,
  })
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })*/
  const client = new Client({
    connectionString: connectionURI
  })
  await client.connect()
  let res = null
  if (parameters && parameters.length > 0) {
    res = await client.query(query, parameters)
  } else {
    res = await client.query(query)
  }
  await client.end()
  let output = {}
  output.data = res

  return output
}

module.exports.main = main
