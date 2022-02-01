# Set Github status
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/6050b97ddce47dfc77a168fd)

## Description
Sets github status of a commit to pending, success or error.

## Inputs
#### **repo**  *Text*
Name of the GitHub repo
#### **sha**  *Text*
GITHUB commit's sha or reference.
#### **status**  *Text*
Set 0 for success, 1 for pending, 2 for error/failure.
#### **owner**  *Text*
Owner of the repo, this is not your GitHub handle but the account handle with which the repo was created.
#### **target_url**  *Text*
Can add a url to commit status, will lead you to the provided link from Github commit status.
#### **description**  *Text*
The description or more details about the particular status set.

## Output
#### **result**  *Boolean*
data returned by the block

