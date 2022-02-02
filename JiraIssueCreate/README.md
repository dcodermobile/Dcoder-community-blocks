# Create a Jira issue
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60edd1fabed5974c4a3332dd)

## Description
Create an issue on Jira with summary, description, issue type , assignee and more options.

## Inputs
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

