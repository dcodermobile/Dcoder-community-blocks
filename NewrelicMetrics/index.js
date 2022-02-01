const axios = require('axios')

const main = async(inputs, auths, event) => {
  const app_id =  inputs.app_id
  const api_key =  inputs.api_key
  const metric_names =  inputs.metric_names
  const value_fields =  inputs.value_fields
  const from =  inputs.from
  const to =  inputs.to
  const period =  inputs.period
  
  // url to fetch data
  let url = `https://api.eu.newrelic.com/v2/applications/${app_id}/metrics/data.json?`
  console.log(url)
  // query params passed to request
  let params = {
    from: from,
    to: to,
    period: period
  }
  params = Object.entries(params).reduce((a,[k,v]) => (v == null || v == undefined || v == '' ? a : (a[k]=v, a)), {})
  console.log(params)
  if(metric_names.indexOf(",")>0){
    metric_names.split(',').forEach(item =>{
      url += `names[]=${item}&`
    })
  }else{
    url += `names[]=${metric_names}&`
  }
  
  if(value_fields.indexOf(",")>0){
    value_fields.split(',').forEach(item =>{
      url += `values[]=${item}&`
    })
  }else{
    if(value_fields)
      url += `values[]=${value_fields}`
  }
  
  
  // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': api_key
  }
  console.log(headers)
  
  // http get api call
  const response = await axios.get(url,{
    headers: headers,
    params: params
  })
  console.log(response.data)
 
  return response.data

}

module.exports.main = main