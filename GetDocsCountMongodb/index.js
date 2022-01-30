const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const main = async(inputs, auths, event) => {
  const url =  inputs.url
  const dbName = inputs.dbName
  let query = inputs.query
  const fieldsToBeConvertedInObjectId =  inputs.fieldsToBeConvertedInObjectId
  const collectionName = inputs.collectionName
  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  if (!client) {
    throw new Error("Unable to create Mongo client.")
    return
  }
  console.log(query)
  if(!query){
    query = {}
  }else{
  if(fieldsToBeConvertedInObjectId){
    fieldsToBeConvertedInObjectId.split(",").forEach(item =>{
      query[item.trim()] = new ObjectId(query[item.trim()])
    })
  }
  }
  const db = client.db(dbName)
  let collection = db.collection(collectionName)
  let count = await collection.countDocuments(query)
  client.close()
  console.log(count)
  return count
}

module.exports.main = main