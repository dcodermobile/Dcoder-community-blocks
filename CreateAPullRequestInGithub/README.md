# Create a pull request in Github

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61eb170de4eeff10586878ae)

## Description

The blocks allows you to create a pull request in a Github repo.

## Inputs

#### **reponame** _Text_

Name of the Github repo where you want to make PR.

#### **owner** _Text_

Owner is the repo owner on Github, get it from url of your Github repo.

#### **title** _Text_

Enter the title for PR.

#### **body** _Text_

Enter the body for the PR.

#### **head** _Text_

The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch .

#### **base** _Text_

The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.

#### **draft** _Boolean_

Indicated whether the PR is in draft.

## Output

#### **updatedIssue** _JsonObject_

Updated issue.
