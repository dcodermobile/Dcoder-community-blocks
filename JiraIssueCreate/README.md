# Create a Jira issue

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60edd1fabed5974c4a3332dd)

## Description

Create an issue on Jira with summary, description, issue type , assignee and more options.

## Inputs

#### **sitename** _Text_

Your jira site-name, as in https://site-name.atlassian.net

#### **projectId** _Text_

Id or key of the project you want to add issues to.

#### **summary** _Text_

Summary of the issue.

#### **description** _Text_

Description of the issue.

#### **issuetype** _Text_

Type of the issue. for ex: Bug or Feature, first letter should be capital.

#### **priority** _Text_

Priority of the issue from Lowest, Low, Medium, High or Highest , default is Medium

#### **assigneeId** _Text_

Id of the user to assign the issue. (Get user id from users block)

## Output

#### **issue** _JsonObject_

Issue created on Jira.
