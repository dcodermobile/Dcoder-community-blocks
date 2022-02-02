

const { Octokit } = require ("@octokit/core");
const axios = require('axios');

const main = async(inputs, auths, event) => {
  const token = auths.GITHUB.ACCESS_TOKEN
  const repoName = inputs.reponame
  const owner = inputs.owner
  //var authToken = auths.GITHUB.ACCESS_TOKEN
  const octokit = new Octokit({
    auth: token
  });
  
  const res = await octokit.request(`GET /repos/${owner}/${repoName}/issues`,{
    
  })
  console.log(res.data)
  return res.data
}


module.exports.main = main