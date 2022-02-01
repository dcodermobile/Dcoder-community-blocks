# Call a JSON API
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/604c8591872a0e2d901207c6)

## Description
Call a JSON api specifying headers, body, params and request method type post/get.

## Inputs
#### **headers**  *JsonObject*
A JSON object for request headers
#### **method**  *Text*
Request method type post, get, put or delete, defaults to get
#### **url**  *Text*
Url of the api to be called.
#### **body**  *JsonObject*
For post requests specify body object.
#### **query_params**  *JsonObject*
Request url parameters to be appended at the end of url to be provided as JSON object.

## Output
#### **apiResponse**  *JsonObject*
json api response.

