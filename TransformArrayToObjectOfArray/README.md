# Transforms an array to object with keys array
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60e84b71c06ded4190792294)

## Description
Transform an array of objects into an object with array for each key element. ex [{item: chair},{item:table}] gets converted to {item: [chair,table]}

## Inputs
#### **arr**  *JsonArray*
Array of objects as input. ex: [ { item: Chair}, { item: table} ]

## Output
#### **transformedObject**  *JsonObject*
The transformed object as output, quite useful when transforming data for graphs and charts widgets.

