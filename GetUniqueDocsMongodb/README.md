# Get mongodb distinct docs
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61350e89dbb44616f84ad4c5)

## Description
Gets mongodb distinct docs in a collection given mongodb connection uri and field to get distinct docs and optional query.

## Inputs
#### **url**  *Text*
Url for mongodb.
#### **dbName**  *Text*
Name of the db.
#### **collectionName**  *Text*
Name of the collection.
#### **query**  *JsonObject*
Query for filtered data as a json object.
#### **field**  *Text*
Name of the field for which to return the distinct values.

## Output
#### **distinctDocs**  *JsonArray*
distinct docs.

