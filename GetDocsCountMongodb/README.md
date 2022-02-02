# Get mongodb docs count in a collection
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e31fd3070050afc00d9e6a)

## Description
Gets mongodb docs count in a collection given mongodb connection uri.

## Inputs
#### **url**  *Text*
Url for mongodb.
#### **dbName**  *Text*
Name of the db.
#### **collectionName**  *Text*
Name of the collection.
#### **query**  *JsonObject*
Query for filtered data as a json object.
#### **fieldsToBeConvertedInObjectId**  *Text*
Comma separated list of fields those are in query and needs to be converted to Mongodb ObjectId for example _id

## Output
#### **count**  *Number*
mongodb docs count.

