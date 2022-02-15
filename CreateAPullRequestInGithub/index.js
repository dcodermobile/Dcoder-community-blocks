const { Octokit } = require('@octokit/core')
const axios = require('axios')

const main = async (inputs, auths, event) => {
  const token = auths.GITHUB.ACCESS_TOKEN
  const repoName = inputs.reponame
  const owner = inputs.owner
  const title = inputs.title
  const body = inputs.body
  const head = inputs.head
  const base = inputs.base
  const draft = inputs.draft

  const octokit = new Octokit({
    auth: token
  })

  const result = await octokit.request(`POST /repos/${owner}/${repoName}/pulls`, {
    title: title,
    body: body,
    head,
    base,
    draft
  })
  console.log(result.data)
  return result.data
}

module.exports.main = main
