# Update a Jira issue

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60eee7cbbed5970e2733758a)

## Description

The block updates an issue on Jira, can update priority, status, assignee, summary and more given issue key.

## Inputs

#### **issueKey** _Text_

key of the issue like FI-182

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
