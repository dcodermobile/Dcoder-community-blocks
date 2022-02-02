const axios = require('axios')

const main = async(inputs, auths, event) => {
  
  // url to fetch data
  const url = `https://${inputs.sitename}.atlassian.net/rest/api/2/priority`
  
  // query params passed to request
  const params = {
  }
  

  // prepare the header
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auths.JIRA.ACCESS_TOKEN
  }
  

  // http get api call
  const response = await axios.get(url,{
    headers,
    params
  })
   
  // api response data
  console.log(response.data)
  return response.data
}

module.exports.main = main