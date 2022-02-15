# Execute OracleDb query

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/614c8414244dc52a7ccd3bf6)

## Description

The block executes a Oracle db query given the connection details, query and optional parameters.

## Inputs

#### **connectionString** _Text_

Your Oracle db server hostname, port and dbname in given format
example: hostname.com:port/dbname

Make sure to whitelist Dcoder's ips to connect to your Db instance. https://code.dcoder.tech/feed/article/6055aa0f646cc60a0c9ac65e/add-dcoder-ips-to-whitelist

#### **username** _Text_

Username for login into Mysql server.

#### **password** _Text_

Password for login into Mysql.

#### **query** _Text_

MySql query to be executed, can contain :q for parameters to be replaced.

#### **parameters** _JsonArray_

Optionally provide the value of parameters defined in query as :q as an array.

## Output

#### **queryResult** _JsonObject_

The output of the query can be accessed from queryResult.data, run the block once to get dynamic output suggestions.
