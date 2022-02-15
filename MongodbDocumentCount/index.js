const { MongoClient } = require('mongodb')

const main = async (inputs, auths, event) => {
  if (inputs.matchCondition && typeof inputs.matchCondition == 'string') {
    inputs.matchCondition = JSON.parse(inputs.matchCondition)
  }

  if (inputs.days && typeof inputs.days == 'string') {
    inputs.days = JSON.parse(inputs.days)
  }
  const conditions = {
    ...(inputs.matchCondition && { ...inputs.matchCondition }),
    createdAt: { $gt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * (inputs.days || 30)) }
  }

  const client = new MongoClient(inputs.mongoUri)

  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(inputs.dbName)
  const collection = db.collection(inputs.collectionName)
  console.log(conditions)
  let resDocs = await collection
    .aggregate([
      // Get only records created in the last 30 days
      { $match: conditions },
      // Get the year, month and day from the createdTimeStamp
      {
        $project: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
          day: { $dayOfMonth: '$createdAt' },
          createdAt: 1
        }
      },
      // Group by year, month and day and get the count
      {
        $group: {
          _id: { year: '$year', month: '$month', day: '$day' },
          createdAt: { $first: '$createdAt' },
          count: { $sum: 1 }
        }
      }
    ])
    .toArray()
  resDoc = resDocs.sort((a, b) => {
    return a.createdAt - b.createdAt
  })

  resDoc.forEach((i) => {
    delete i._id
  })
  return resDocs
}

module.exports.main = main
