var { google } = require('googleapis')
const axios = require('axios')

const main = async (inputs, secrets, auths, context) => {
  var packageName = inputs.packageName
  var client_email = inputs.clientEmail
  var privateKey = inputs.privateKey.replace(new RegExp('\\\\n', 'g'), '\n')
  const language = inputs.language

  const jwtClient = new google.auth.JWT(client_email, null, privateKey, [
    'https://www.googleapis.com/auth/androidpublisher'
  ])
  try {
    const connection = await jwtClient.authorize()

    if (connection.err) {
      console.log(err)
    } else {
      console.log(' Successfully connected!')
    }

    var url = `https://www.googleapis.com/androidpublisher/v3/applications/${packageName}/reviews`
    var params = {
      access_token: connection.access_token,
      maxResults: 50,
      translationLanguage: language
    }
    var headers = {
      'Content-Type': 'application/json'
    }

    var res = await axios.get(url, {
      headers,
      params
    })
    console.log(res.data.reviews.length)
    console.log(res.data)
    return res.data
  } catch (e) {
    console.log(`the exception is ` + e)
  }
}

module.exports.main = main
