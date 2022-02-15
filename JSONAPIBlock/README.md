# Call a JSON API

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/604c8591872a0e2d901207c6)

## Description

Call a JSON api specifying headers, body, params and request method type post/get.

## Inputs

#### **headers** _JsonObject_

A JSON object for request headers

#### **method** _Text_

Request method type post, get, put or delete, defaults to get

#### **url** _Text_

Url of the api to be called.

#### **body** _JsonObject_

For post requests specify body object.

#### **query_params** _JsonObject_

Request url parameters to be appended at the end of url to be provided as JSON object.

## Output

#### **apiResponse** _JsonObject_

json api response.
