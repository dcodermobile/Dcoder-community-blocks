# MongoDB document count of past n days

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6139032f477ff928c08934ee)

## Description

This block gives the counts document of given collection of past n days.

## Inputs

#### **mongoUri** _Text_

Connection string to connect to MongoDB server.

#### **dbName** _Text_

Name of the db to connect.

#### **collectionName** _Text_

Name of the collection to query.

#### **days** _Number_

Days data required - default to 30

#### **matchCondition** _JsonObject_

Aditional condition to match while querying db.

## Output

#### **countResult** _JsonArray_

Count result of the given collection.
