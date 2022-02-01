# Create a pull request in Github
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/61eb170de4eeff10586878ae)

## Description
The blocks allows you to create a pull request in a Github repo.

## Inputs
#### **reponame**  *Text*
Name of the Github repo where you want to make PR.
#### **owner**  *Text*
Owner is the repo owner on Github, get it from url of your Github repo.
#### **title**  *Text*
Enter the title for PR.
#### **body**  *Text*
Enter the body for the PR.
#### **head**  *Text*
The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch  .
#### **base**  *Text*
The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
#### **draft**  *Boolean*
Indicated whether the PR is in draft.

## Output
#### **updatedIssue**  *JsonObject*
Updated issue.

