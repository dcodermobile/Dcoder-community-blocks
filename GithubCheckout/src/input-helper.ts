import * as fsHelper from './fs-helper'
import * as github from '@actions/github'
import * as path from 'path'
import {IGitSourceSettings} from './git-source-settings'

export function getInputs(inputs, auths): IGitSourceSettings {
  const result = ({} as unknown) as IGitSourceSettings

  // GitHub workspace
  let githubWorkspacePath = inputs.workspace
  if (!githubWorkspacePath) {
    throw new Error('GITHUB_WORKSPACE not defined')
  }
  githubWorkspacePath = path.resolve(githubWorkspacePath)
  // core.debug(`GITHUB_WORKSPACE = '${githubWorkspacePath}'`)
  fsHelper.directoryExistsSync(githubWorkspacePath, true)

  // Qualified repository
  const qualifiedRepository =
    inputs.repository ||
    `${github.context.repo.owner}/${github.context.repo.repo}`
  // core.debug(`qualified repository = '${qualifiedRepository}'`)
  const splitRepository = qualifiedRepository.split('/')
  if (
    splitRepository.length !== 2 ||
    !splitRepository[0] ||
    !splitRepository[1]
  ) {
    throw new Error(
      `Invalid repository '${qualifiedRepository}'. Expected format {owner}/{repo}.`
    )
  }
  result.repositoryOwner = splitRepository[0]
  result.repositoryName = splitRepository[1]

  // Repository path
  result.repositoryPath = inputs.path || '.'
  result.repositoryPath = path.resolve(
    githubWorkspacePath,
    result.repositoryPath
  )
  if (
    !(result.repositoryPath + path.sep).startsWith(
      githubWorkspacePath + path.sep
    )
  ) {
    throw new Error(
      `Repository path '${result.repositoryPath}' is not under '${githubWorkspacePath}'`
    )
  }

  // Workflow repository?
  const isWorkflowRepository =
    qualifiedRepository.toUpperCase() ===
    `${github.context.repo.owner}/${github.context.repo.repo}`.toUpperCase()

  // Source branch, source version
  result.ref = inputs.ref
  if (!result.ref) {
    if (isWorkflowRepository) {
      result.ref = github.context.ref
      result.commit = github.context.sha

      // Some events have an unqualifed ref. For example when a PR is merged (pull_request closed event),
      // the ref is unqualifed like "main" instead of "refs/heads/main".
      if (result.commit && result.ref && !result.ref.startsWith('refs/')) {
        result.ref = `refs/heads/${result.ref}`
      }
    }
  }
  // SHA?
  else if (result.ref.match(/^[0-9a-fA-F]{40}$/)) {
    result.commit = result.ref
    result.ref = ''
  }
 // core.debug(`ref = '${result.ref}'`)
 // core.debug(`commit = '${result.commit}'`)

  // Clean
  result.clean = (inputs.clean || 'true').toString().toUpperCase() === 'TRUE'
  //core.debug(`clean = ${result.clean}`)

  // Fetch depth
  result.fetchDepth = Math.floor(Number(inputs['fetch-depth']) || 1)
  if (isNaN(result.fetchDepth) || result.fetchDepth < 0) {
    result.fetchDepth = 0
  }
  //core.debug(`fetch depth = ${result.fetchDepth}`)

  // LFS
  result.lfs = (inputs.lfs || 'false').toString().toUpperCase() === 'TRUE'
  //core.debug(`lfs = ${result.lfs}`)

  // Submodules
  result.submodules = false
  result.nestedSubmodules = false
  const submodulesString = (inputs.submodules || '').toString().toUpperCase()
  if (submodulesString == 'RECURSIVE') {
    result.submodules = true
    result.nestedSubmodules = true
  } else if (submodulesString == 'TRUE') {
    result.submodules = true
  }
  //core.debug(`submodules = ${result.submodules}`)
  //core.debug(`recursive submodules = ${result.nestedSubmodules}`)

  // Auth token
  result.authToken = auths.GITHUB.ACCESS_TOKEN

  // SSH
  result.sshKey = inputs['ssh-key']
  result.sshKnownHosts = inputs['ssh-known-hosts']
  result.sshStrict =
    (inputs['ssh-strict'] || 'true').toString().toUpperCase() === 'TRUE'

  // Persist credentials
  result.persistCredentials =
    (inputs['persist-credentials'] || 'false').toString().toUpperCase() === 'TRUE'

  return result
}
