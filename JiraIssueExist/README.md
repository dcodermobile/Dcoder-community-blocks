# Check if issue exist on Jira

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/613875e3dbb44683ef4ae070)

## Description

Get issues of a Jira project and check if the current issue already exist or not.

## Inputs

#### **sitename** _Text_

Your jira site-name, as in https://site-name.atlassian.net

#### **projectId** _Text_

Id or key of the project you want to add issues to.

#### **issueTitle** _Text_

Title of issue to be checked.

#### **maxResults** _Number_

Limit the number of issues to be returned.

#### **jql** _Text_

Optionally provide jql for advance search options for Jira issues. more here: https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/

## Output

#### **issueExist** _Boolean_

true if issue exists else false
