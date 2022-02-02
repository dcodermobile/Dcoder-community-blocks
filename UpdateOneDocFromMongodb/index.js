const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const main = async(inputs, auths, event) => {
  const url =  inputs.url
  const dbName = inputs.dbName
  let query = inputs.query
  let update = inputs.update
  const collectionName = inputs.collectionName
  const queryFieldsToBeConvertedInObjectId =  inputs.queryFieldsToBeConvertedInObjectId
  const updateFieldsToBeConvertedInDate = inputs.updateFieldsToBeConvertedInDate
  const updateFieldsToBeConvertedInObjectId = inputs.updateFieldsToBeConvertedInObjectId
  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  if (!client) {
    throw new Error("Unable to create Mongo client.")
    return
  }
  
  if(!query){
    query = {}
  }
  const db = client.db(dbName)
  
  let collection = db.collection(collectionName)
 
  if(queryFieldsToBeConvertedInObjectId){
    queryFieldsToBeConvertedInObjectId.split(",").forEach(item =>{
      query[item.trim()] = new ObjectId(query[item.trim()])
    })
  }
  
  if(updateFieldsToBeConvertedInObjectId){
    updateFieldsToBeConvertedInObjectId.split(",").forEach(item =>{
      item = item.trim()
      if (update.$set && (item in update.$set)){
        update.$set[item] = new ObjectId(update.$set[item])
      }
      if (update.$unset && (item in update.$unset)){
        update.$unset[item] = new ObjectId(update.$unset[item])
      }
      if (update.$push && (item in update.$push)){
        update.$push[item] = new ObjectId(update.$push[item])
      }
    })
  }
  
  if(updateFieldsToBeConvertedInDate){
    updateFieldsToBeConvertedInDate.split(",").forEach(item =>{
      item = item.trim()
      if (update.$set && (item in update.$set)){
        update.$set[item] = new Date(update.$set[item])
      }
      if (update.$unset && (item in update.$unset)){
        update.$unset[item] = new Date(update.$unset[item])
      }
      if (update.$push && (item in update.$push)){
        update.$push[item] = new Date(update.$push[item])
      }
    })
  }
  
  await collection.updateOne(query,update)
  client.close()
  console.log('Document updated successfully.')
}

module.exports.main = main