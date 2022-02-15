# Update one doc in a mongodb collection

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6173e81b22cec6b16fc1fb0e)

## Description

Update mongodb doc in a collection by providing query, update object and mongourl.

## Inputs

#### **url** _Text_

Url for mongodb.

#### **dbName** _Text_

Name of the db.

#### **collectionName** _Text_

Name of the collection.

#### **query** _JsonObject_

Query for filtered data as a json object.

#### **update** _JsonObject_

Value to be updated in doc

#### **queryFieldsToBeConvertedInObjectId** _Text_

Comma separated list of fields those are in query and needs to be converted to Mongodb ObjectId for example \_id

#### **updateFieldsToBeConvertedInObjectId** _Text_

Comma separated list of fields those are in update and needs to be converted to Mongodb ObjectId for example \_id

#### **updateFieldsToBeConvertedInDate** _Text_

Comma separated list of fields those are in update and needs to be converted to Date object for example createdAt

## Output
