const main = async (inputs, auths, event) => {
  const accountSid = inputs.accountSid
  const authToken = inputs.authToken
  const from = inputs.from
  const to = inputs.to
  const message = inputs.message
  const mediaUrl = inputs.mediaUrl
  const client = require('twilio')(accountSid, authToken)
  const options = {
    from: from,
    to: to,
    body: message
  }
  if (mediaUrl) {
    options.mediaUrl = mediaUrl
  }
  const result = await client.messages.create(options)

  console.log(result.sid)
}

module.exports.main = main
