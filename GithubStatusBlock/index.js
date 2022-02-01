const main = async (inputs, auths, event) => {
  const {
    Octokit
  } = require("@octokit/core")


  const octokit = new Octokit({
    auth: auths.GITHUB.ACCESS_TOKEN
  })
  const repo = inputs.repo
  const sha = inputs.sha
  const owner = inputs.owner
  const status = inputs.status
  let description = ''
  let target_url = ''
  try {
    description = inputs.description
    target_url = inputs.target_url
  } catch (err) {
    // do nothing, these are optional
  }

  let state = 'failure'
  if (status == 0) {
    state = 'success'
  } else if (status == 1) {
    state = 'pending'
  }
  //else 2 and other means failure or error
  const data = {
    owner,
    repo,
    sha,
    state,
    description,
    context: 'dcoder-flows',
    target_url
  }
  const main = async () => {
    const response = await octokit.request(
      'POST /repos/{owner}/{repo}/statuses/{sha}',
      data)
    if (response.status == 201) {
      return true
    } else {
      return false
    }
    console.log(response)
  }
  main()
}

module.exports.main = main