# MongoDB document count of past x days
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/610cb51a467526b1c08f6586)

## Description
This block gives the counts document of given collection of past x days.

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

