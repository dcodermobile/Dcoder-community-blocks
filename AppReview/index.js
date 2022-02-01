var {google} = require("googleapis");
const axios = require('axios');

const main = async(inputs, auths, event) => {
  var packageName = inputs.packageName;
  const language =  inputs.language
  const serviceAccount = JSON.parse(inputs.serviceAccountText)
  const jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/androidpublisher']
  )
     
  const connection = await jwtClient.authorize()
 
  
  var url =`https://www.googleapis.com/androidpublisher/v3/applications/${packageName}/reviews`
  var params = {
  access_token : connection.access_token,
  maxResults:50,
  translationLanguage: language
  };
  var headers = {
    'Content-Type' : 'application/json',
  };

  var  res =  await axios.get(url,{
    headers,
    params
  });
  console.log(res.data.reviews.length)
  console.log(res.data)
  return res.data 
 }

module.exports.main = main