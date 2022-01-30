const axios = require('axios')

const main = async(inputs, auths, event) => {
  const viewId =  inputs.viewId
  const metrics =  inputs.metrics
  const startDate =  inputs.startDate
  const endDate =  inputs.endDate
  const dimensions =  inputs.dimensions
  const sort =  inputs.sort
  const filters =  inputs.filters
  const maxResults =  inputs.maxResults
  // url to fetch data
  const url = "https://www.googleapis.com/analytics/v3/data/ga"
  
  // query params passed to request
  const params = {
    ids: 'ga:'+viewId,
    metrics,
    'start-date': startDate,
    'end-date': endDate
  }
  if(dimensions){
    params.dimensions = dimensions
  }
  if(sort){
    params.sort = sort
  }
  if(maxResults){
    params['max-results'] = maxResults
  }
  
  if(filters){
    params.filters = filters
  }
  
  // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auths.GOOGLE_ANALYTICS.ACCESS_TOKEN}`
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