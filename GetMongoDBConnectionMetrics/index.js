const { MongoClient } = require('mongodb');
  
const main = async (inputs, secrets, auths, context) => {
  // Replace the uri string with your MongoDB deployment's connection string.
  const uri = inputs.mongo_url
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  // find the storage statistics for the "sample_mflix" database using the 'dbStats' command
  /*const result = await db.command({
    dbStats: 1,
  });*/
  const result = await db.command({
    serverStatus: 1,
  });
  await client.close();
  console.log(result);
  return result
}

module.exports.main = main