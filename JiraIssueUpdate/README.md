# Update a Jira issue
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60eee7cbbed5970e2733758a)

## Description
The block updates an issue on Jira, can update priority, status, assignee, summary and more given issue key.

## Inputs
#### **issueKey**  *Text*
key of the issue like FI-182
#### **sitename**  *Text*
Your jira site-name, as in https://site-name.atlassian.net
#### **projectId**  *Text*
Id or key of the project you want to add issues to.
#### **summary**  *Text*
Summary of the issue.
#### **description**  *Text*
Description of the issue.
#### **issuetype**  *Text*
Type of the issue. for ex: Bug or Feature, first letter should be capital.
#### **priority**  *Text*
Priority of the issue from Lowest, Low, Medium, High or Highest , default is Medium
#### **assigneeId**  *Text*
Id of the user to assign the issue. (Get user id from users block)

## Output
#### **issue**  *JsonObject*
Issue created on Jira.

