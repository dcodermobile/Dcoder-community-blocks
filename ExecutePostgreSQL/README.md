# Execute PostgreSQL query
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/6148b368eaf4a98509b066f7)

## Description
The block executes a PostgreSQL query given the connection string, query and optional parameters.

## Inputs
#### **connectionURI**  *Text*
The PostgreSQL server connection string uri to connect with the server in the format:

postgresql://dbuser:secretpassword@database.server.com:3211/mydb

Make sure to whitelist Dcoder's ips to connect to your db instance. Add Dcoder ips to Whitelist
https://code.dcoder.tech/feed/article/6055aa0f646cc60a0c9ac65e/add-dcoder-ips-to-whitelist
#### **query**  *Text*
PostgreSql query to be executed, can contain $1 $2 for parameters to be replaced.
#### **parameters**  *JsonArray*
Optionally provide the value of parameters defined in query as $1, $2 etc as an array.

## Output
#### **queryResult**  *JsonObject*
The output of the query can be accessed from queryResult.data, run the block once to get dynamic output suggestions.

