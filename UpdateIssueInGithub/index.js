const { Octokit } = require('@octokit/core')
const axios = require('axios')

const main = async (inputs, auths, event) => {
  const token = auths.GITHUB.ACCESS_TOKEN
  const repoName = inputs.reponame
  const owner = inputs.owner
  const issueTitle = inputs.title
  const issueBody = inputs.body
  const issueNumber = inputs.issueNumber
  //var authToken = auths.GITHUB.ACCESS_TOKEN
  const octokit = new Octokit({
    auth: token
  })

  const result = await octokit.request(`POST /repos/${owner}/${repoName}/issues/${issueNumber}`, {
    title: issueTitle,
    body: issueBody
  })
  console.log(result.data)
  return result.data
}

module.exports.main = main
