

const { Octokit } = require ("@octokit/core");
const axios = require('axios');

const main = async(inputs, auths, event) => {
  const token = auths.GITHUB.ACCESS_TOKEN
  const octokit = new Octokit({
    auth: token
  });
  
  const result = await octokit.request(`GET /user`,{
    
  })
     
  console.log(result.data)
  return result.data
}


module.exports.main = main