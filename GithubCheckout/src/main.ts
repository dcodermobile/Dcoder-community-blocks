import * as core from '@actions/core'
import * as coreCommand from '@actions/core/lib/command'
import * as gitSourceProvider from './git-source-provider'
import * as inputHelper from './input-helper'
import * as path from 'path'
import * as fs from 'fs'
import * as stateHelper from './state-helper'
import * as dcoderIO from '@dcodermobile/io'

export const main = async(inputs, auths): Promise<void> => {
  process.env.GITHUB_REPOSITORY= inputs.repository
 
    fs.mkdirSync(inputs.workspace, { recursive: true })
    const sourceSettings = inputHelper.getInputs(inputs,auths)
    
    fs.mkdirSync(sourceSettings.repositoryPath, { recursive: true } )
    try {
      // Register problem matcher
      coreCommand.issueCommand(
        'add-matcher',
        {},
        path.join(__dirname, 'problem-matcher.json')
      ) 

      // Get sources
      await gitSourceProvider.getSource(sourceSettings)
    } finally {
      // Unregister problem matcher
      coreCommand.issueCommand('remove-matcher', {owner: 'checkout-git'}, '')
    }
}
