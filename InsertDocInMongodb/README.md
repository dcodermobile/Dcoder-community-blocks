# Insert doc in a mongodb collection

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/619e57b96a015ae39d78b1fd)

## Description

Insert or create a doc in a Mongodb collection by providing doc object and mongourl.

## Inputs

#### **url** _Text_

Url for mongodb.

#### **dbName** _Text_

Name of the db.

#### **collectionName** _Text_

Name of the collection.

#### **doc** _JsonObject_

Mongodb doc to be inserted in collection as JsonObject

#### **fieldsToBeConvertedInObjectId** _Text_

Comma separated list of fields those are in doc object and needs to be converted to Mongodb ObjectId for example \_id

#### **fieldsToBeConvertedInDate** _Text_

Comma separated list of fields those are in doc object and needs to be converted to Date object for example createdAt

## Output
