# MongoDB document count of past n days
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6139032f477ff928c08934ee)

## Description
This block gives the counts document of given collection of past n days.

## Inputs
#### **mongoUri**  *Text*
Connection string to connect to MongoDB server.
#### **dbName**  *Text*
Name of the db to connect.
#### **collectionName**  *Text*
Name of the collection to query.
#### **days**  *Number*
Days data required - default to 30
#### **matchCondition**  *JsonObject*
Aditional condition to match while querying db.

## Output
#### **countResult**  *JsonArray*
Count result of the given collection.

