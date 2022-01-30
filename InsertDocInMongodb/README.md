# Insert doc in a mongodb collection
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/619e57b96a015ae39d78b1fd)

## Description
Insert or create a doc in a Mongodb collection by providing doc object and mongourl.

## Inputs
#### **url**  *Text*
Url for mongodb.
#### **dbName**  *Text*
Name of the db.
#### **collectionName**  *Text*
Name of the collection.
#### **doc**  *JsonObject*
Mongodb doc to be inserted in collection as JsonObject
#### **fieldsToBeConvertedInObjectId**  *Text*
Comma separated list of fields those are in doc object and needs to be converted to Mongodb ObjectId for example _id
#### **fieldsToBeConvertedInDate**  *Text*
Comma separated list of fields those are in doc object and needs to be converted to Date object for example createdAt

## Output

