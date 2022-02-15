const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const main = async (inputs, auths, event) => {
  const url = inputs.url
  const dbName = inputs.dbName
  let doc = inputs.doc
  const collectionName = inputs.collectionName
  const fieldsToBeConvertedInObjectId = inputs.fieldsToBeConvertedInObjectId
  const fieldsToBeConvertedInDate = inputs.fieldsToBeConvertedInDate

  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  if (!client) {
    throw new Error('Unable to create Mongo client.')
    return
  }

  const db = client.db(dbName)

  let collection = db.collection(collectionName)

  if (fieldsToBeConvertedInObjectId) {
    fieldsToBeConvertedInObjectId.split(',').forEach((item) => {
      doc[item.trim()] = new ObjectId(doc[item.trim()])
    })
  }

  if (fieldsToBeConvertedInDate) {
    fieldsToBeConvertedInDate.split(',').forEach((item) => {
      doc[item.trim()] = new Date(doc[item.trim()])
    })
  }

  await collection.insert(doc)
  client.close()
  console.log('Document added successfully.')
}

module.exports.main = main
