const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const main = async (inputs, auths, event) => {
  const url = inputs.url
  const dbName = inputs.dbName
  let query = inputs.query
  const collectionName = inputs.collectionName
  let skip = inputs.skip
  let limit = inputs.limit
  let sort = inputs.sort
  let select = inputs.select
  const fieldsToBeConvertedInObjectId = inputs.fieldsToBeConvertedInObjectId
  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  if (!client) {
    throw new Error('Unable to create Mongo client.')
    return
  }
  console.log('Executing query:\n' + query)
  if (!query) {
    query = {}
  }
  const db = client.db(dbName)
  let collection = db.collection(collectionName)
  if (!skip) {
    skip = 0
  }
  if (!limit) {
    limit = 0
  }
  if (fieldsToBeConvertedInObjectId) {
    fieldsToBeConvertedInObjectId.split(',').forEach((item) => {
      let nestedLevels = item.trim().split('.')
      if (nestedLevels.length == 1) {
        if (Array.isArray(query[nestedLevels[0]])) {
          let tempArray = []
          query[nestedLevels[0]].forEach((i) => {
            tempArray.push(new ObjectId(i))
          })
          query[nestedLevels[0]] = tempArray
        } else query[nestedLevels[0]] = new ObjectId(query[nestedLevels[0]])
      } else if (nestedLevels.length == 2) {
        if (Array.isArray(query[nestedLevels[0]][nestedLevels[1]])) {
          let tempArray = []
          query[nestedLevels[0]][nestedLevels[1]].forEach((i) => {
            tempArray.push(new ObjectId(i))
          })
          query[nestedLevels[0]][nestedLevels[1]] = tempArray
        } else
          query[nestedLevels[0]][nestedLevels[1]] = new ObjectId(
            query[nestedLevels[0]][nestedLevels[1]][nestedLevels[2]]
          )
      } else if (nestedLevels.length == 3) {
        if (Array.isArray(query[nestedLevels[0]][nestedLevels[1]])) {
          let tempArray = []
          query[nestedLevels[0]][nestedLevels[1]][nestedLevels[2]].forEach((i) => {
            tempArray.push(new ObjectId(i))
          })
          query[nestedLevels[0]][nestedLevels[1]][nestedLevels[2]] = tempArray
        } else
          query[nestedLevels[0]][nestedLevels[1]][nestedLevels[2]] = new ObjectId(
            query[nestedLevels[0]][nestedLevels[1]][nestedLevels[2]]
          )
      } else {
        throw new Error(
          'More than 3 level of nesting in fields to be converted to ObjectId is not supported.'
        )
      }
      // query[item.trim()] = new ObjectId(query[item.trim()])
    })
  }
  let projection = null
  if (select && Object.keys(select).length > 0) {
    projection = select
  }

  let result = await collection
    .find(query)
    .project(projection)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .toArray()
  client.close()
  return result
}

module.exports.main = main
