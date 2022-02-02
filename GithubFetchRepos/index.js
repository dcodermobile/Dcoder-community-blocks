const { Octokit } = require ("@octokit/core");
const axios = require('axios');
const main = async(inputs, auths, event) => {
  const authToken = auths.GITHUB.ACCESS_TOKEN
  const username =  inputs.username
   
  const octokit = new Octokit({
    auth: authToken
  });
  
  //const userRes = await octokit.request("/user")
  //console.log(userRes)
  //const userName = userRes.data.login;
  //console.log(userName)
  var options = {
    url: `https://api.github.com/users/${username}/repos`,
    type: 'private',
    headers: {
      'User-Agent': 'request',
       auth: authToken,
    }
  };
  var list = [];
  var res =  await axios(options);
  //console.log(res)
  for (var i = 0; i < res.data.length; i++){
    // console.log(repos[i].name);
    list.push(res.data[i].name);
  }
  console.log(list);
  return list
}
module.exports.main = main