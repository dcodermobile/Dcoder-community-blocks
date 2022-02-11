var { google } = require('googleapis')
const axios = require('axios')

const main = async (inputs, auths, event) => {
  const packageName = inputs.packageName
  const serviceAccountText = inputs.serviceAccountText
  const reviewId = inputs.reviewId
  const replyText = inputs.replyText
  const serviceAccount = JSON.parse(serviceAccountText)
  const jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/androidpublisher']
  )

  const connection = await jwtClient.authorize()

  const url = `https://www.googleapis.com/androidpublisher/v3/applications/${packageName}/reviews/${reviewId}:reply`
  const params = {
    access_token: connection.access_token
  }

  const headers = {
    'Content-Type': 'application/json'
  }
  const body = {
    replyText: replyText
  }
  const res = await axios.post(url, body, {
    headers,
    params
  })

  console.log(res.data)
  return res.data
}

module.exports.main = main
