# Get issues of a Jira project 
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60ede663bed597369d3337ee)

## Description
Get issues of a Jira project, supports jql for filtering.

## Inputs
#### **sitename**  *Text*
Your jira site-name, as in https://site-name.atlassian.net
#### **projectId**  *Text*
Id or key of the project you want to add issues to.
#### **maxResults**  *Number*
Limit the number of issues to be returned.
#### **jql**  *Text*
Optionally provide jql for advance search options for Jira issues. more here: https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/

## Output
#### **issues**  *JsonObject*
Issues from Jira.

