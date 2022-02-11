# Set Github status

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6050b97ddce47dfc77a168fd)

## Description

Sets github status of a commit to pending, success or error.

## Inputs

#### **repo** _Text_

Name of the GitHub repo

#### **sha** _Text_

GITHUB commit's sha or reference.

#### **status** _Text_

Set 0 for success, 1 for pending, 2 for error/failure.

#### **owner** _Text_

Owner of the repo, this is not your GitHub handle but the account handle with which the repo was created.

#### **target_url** _Text_

Can add a url to commit status, will lead you to the provided link from Github commit status.

#### **description** _Text_

The description or more details about the particular status set.

## Output

#### **result** _Boolean_

data returned by the block
