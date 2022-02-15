const { MongoClient } = require('mongodb')

const main = async (inputs, auths, event) => {
  // Replace the uri string with your MongoDB deployment's connection string.
  const uri = inputs.mongo_url
  const scale = inputs.scale
  if (!scale) {
    scale = 1
  }
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(inputs.database)
  // find the storage statistics for the "sample_mflix" database using the 'dbStats' command
  const result = await db.command({
    dbStats: 1,
    scale: scale
  })

  await client.close()
  console.log(result)
  return result
}

module.exports.main = main
