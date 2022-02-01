# Update one doc in a mongodb collection
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/6173e81b22cec6b16fc1fb0e)

## Description
Update mongodb doc in a collection by providing query, update object and mongourl.

## Inputs
#### **url**  *Text*
Url for mongodb.
#### **dbName**  *Text*
Name of the db.
#### **collectionName**  *Text*
Name of the collection.
#### **query**  *JsonObject*
Query for filtered data as a json object.
#### **update**  *JsonObject*
Value to be updated in doc
#### **queryFieldsToBeConvertedInObjectId**  *Text*
Comma separated list of fields those are in query and needs to be converted to Mongodb ObjectId for example _id
#### **updateFieldsToBeConvertedInObjectId**  *Text*
Comma separated list of fields those are in update and needs to be converted to Mongodb ObjectId for example _id
#### **updateFieldsToBeConvertedInDate**  *Text*
Comma separated list of fields those are in update and needs to be converted to Date object for example createdAt

## Output

