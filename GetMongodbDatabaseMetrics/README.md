# Get Mongodb database stats
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60e975fd2454f43ca05b717c)

## Description
Get mongodb database metrics by providing mongodb url and database name.

## Inputs
#### **mongo_url**  *Text*
Mongodb url with admin db access to execute serverStatus command, ex, mongodb://user:pass@host:port/dbname?replicaSet=setname
#### **database**  *Text*
Database name for metrics.
#### **scale**  *Number*
To scale storage values in output for example value 1024 here will return all stats in KB instead of bytes.

## Output
#### **stats**  *JsonObject*
Mongodb stats

