const axios = require('axios')

const main = 
  async(inputs, auths, event) => {
  const key =  inputs.projectId
  const summary =  inputs.summary
  const description =  inputs.description
  const issuetype =  inputs.issuetype
  const priority =  inputs.priority
  const assigneeId =  inputs.assigneeId
  const issueKey =  inputs.issueKey
  
  // url to fetch data
  const url = `https://${inputs.sitename}.atlassian.net/rest/api/2/issue/${issueKey}`
  
  // query params passed to request
  const params = { }

  // prepare the header
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auths.JIRA.ACCESS_TOKEN
  }
  
  let body = 
  {
    fields: {
       project:
       {
          key: key
       }
    } 
  }
  
  if(summary){
    body.fields.summary = summary
  }
  
  if(description){
    body.fields.description = description
  }
  if(issuetype){
    body.fields.issuetype = {
      name: issuetype
    }
  }
  
  if(priority){
    body.fields.priority = {
      name: priority
    }
  }
  
  if(assigneeId){
    body.fields["assignee"] = {
      id: assigneeId
    }
  }
  
  try{
  // http post api call
  const response = await axios.put(url, body, {
    headers,
    params
  })
 
  // api response data
  return { success: true }
  }catch(err){
    console.log(err.response.data)
    throw err
  }
}

module.exports.main = main
