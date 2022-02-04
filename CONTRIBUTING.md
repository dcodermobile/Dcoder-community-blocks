# Contributing guidelines

## Before contributing

Welcome to [dcodermobile/Dcoder-community-blocks](https://github.com/dcodermobile/Dcoder-community-blocks)! Before sending your pull requests,
make sure that you *read the whole guidelines*. If you have any doubt on the contributing guide, please feel free to
[state it clearly in an issue](https://github.com/dcodermobile/Dcoder-community-blocks/issues/new).

## Contribution

### Process
- Make a fork of this repo in your account.
- Add a folder to add a new block inside the repo, you can create a block for any application or apis available. You can use this list for [ideas](https://github.com/dcodermobile/Dcoder-community-blocks/blob/main/Roadmap.md) on apps to create block.
- Use [dcoder-cli](https://www.npmjs.com/package/@dcodermobile/dcoder-cli) to initialise a Dcoder block with base template, login from cli and run `dcoder-cli block init`
- At the moment editing exiting blocks is not allowed, you can create new blocks, test them and then raise a PR, only original creators should do a PR for exisitng block.
- Once block code is generated, make the changes in index.js, take input parameters using inputs.paramName and declare those params in dcoder_block.yml
- You can use cli `dcoder-cli block authentication:add` to add a supported oauth and you can `console.log(auths)` in code to see your authentication token, which you'll need to make the api call.
  For details on other oauth operations and commands use `dcoder-cli -h`, `dcoder-cli block -h` or refer npm guide for [dcoder-cli](https://www.npmjs.com/package/@dcodermobile/dcoder-cli)
- You can test run your block with `dcoder-cli block run`
- Once the block runs as expected  create a build by running a command `dcoder-cli block run-command:run` and selecting `@vercel/ncc build`, this will let you run commands defined in dcoder_run.yml
- The build is created using `@vercel/ncc build` command, change the index.js to dist/index.js in filePath in dcoder_block.yml file.
- Turn off auto install of npm modules with `dcoder-cli block update-info --auto-install-package false` as we are using a compiled single file in dist folder.
- Add title, description and tags for your block with ```dcoder-cli block update-info --title "Your title here" --description "This is block description" --tags "tag1,tag2,tag3"```
- Add the readme for block using `dcoder-cli block readme`
- Give it a retest, once everything work as expected, create a version with `dcoder-cli block version:create` and enter 1.0.0 as version, we follow semantic versioning.
- Publish the block with `dcoder-cli block publish`
- After publishing generate a PR on original repo.


### Rules

#### File Naming Convention
- filenames should use the UpperCamelCase (PascalCase) style.
- There should be no spaces in filenames.
- Example:UserProfile.js is allowed but userprofile.js,Userprofile.js,user-Profile.js,userProfile.js are not.

#### Block/Folder Naming Convention
- Block should use the UpperCamelCase (PascalCase) style.
- There should be no spaces in blocknames.
- Example:SlackSendMessage is allowed but slackSendMessage,slacksendmessage,Slack-send-message, slack_send_message are not.


#### Main file in block
- Name of the main file should always be index.js

#### Main function name & signature
- Name and signature of the main function must be main(inputs, auths, event) in index.js

#### Auto-Install
- Auto install feature must be turned off and a '@vercel/ncc build' generated build file should be used, this allows a faster run of flows as flows do not need to find and install modules at runtime.

#### Path for main file
- The path for block's main file must be `dist/index.js` in dcoder_block.yml
