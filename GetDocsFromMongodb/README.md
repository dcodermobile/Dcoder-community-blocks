# Get mongodb docs in a collection
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e34eb5070050856d0da1d1)

## Description
Get mongodb docs in a collection by providing query and mongourl.

## Inputs
#### **url**  *Text*
Url for mongodb.
#### **dbName**  *Text*
Name of the db.
#### **collectionName**  *Text*
Name of the collection.
#### **query**  *JsonObject*
Query for filtered data as a json object.
#### **skip**  *Number*
How many results to skip from mongo cursor, default is no skip.
#### **limit**  *Number*
to limit the documents in output.
#### **fieldsToBeConvertedInObjectId**  *Text*
Comma separated list of fields those are in query and needs to be converted to Mongodb ObjectId for example _id or _id.$in
#### **sort**  *JsonObject*
A json object to sort the results. can be key value like { "createdAt": -1 }
#### **select**  *JsonObject*
Key value pair as a JsonObject for the fields. Use 1 or true to keep a field, and -1 or false to remove.
ex
{ "username": 1, "password": -1 }

## Output
#### **docs**  *JsonArray*
Returned mongodb docs.

