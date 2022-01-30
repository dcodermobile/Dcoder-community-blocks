const Redis = require("ioredis")

const main = async(inputs, auths, context) => {
  const connectionUri =  inputs.connectionUri
  const key =  inputs.key
  const redis = new Redis(connectionUri)
  const value = await redis.del(key)
  redis.disconnect()
  return value
}

module.exports.main = main