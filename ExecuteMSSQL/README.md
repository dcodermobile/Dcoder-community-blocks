# Execute MSSQL query

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/614c5d82244dc5c906cd3b6f)

## Description

The block executes a MSSQL query given the connection details, query and optional parameters.

## Inputs

#### **host** _Text_

Your Mssql server hostname.
Make sure to whitelist Dcoder's ips to connect to your Db instance. https://code.dcoder.tech/feed/article/6055aa0f646cc60a0c9ac65e/add-dcoder-ips-to-whitelist

#### **port** _Number_

Port to connect with your Mysql server.

#### **username** _Text_

Username for login into Mysql server.

#### **password** _Text_

Password for login into Mysql.

#### **database** _Text_

Name of the database to connect to.

#### **query** _Text_

MsSql query to be executed.

## Output

#### **queryResult** _JsonObject_

The output of the query can be accessed from queryResult.data, run the block once to get dynamic output suggestions.
