# Html email template

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60997af72885bb4da6b21c72)

## Description

Given a key value pair json data, image url and title, the template can generate html for email.t

## Inputs

#### **JSON_DATA** _JsonObject_

data to generate report

#### **image_url** _Text_

image url for the template, will be shown at top, if not provided default Dcoder image will be used.

#### **title** _Text_

Title for the template.

#### **bg_color** _Text_

bg color for the html generated, can be in hex color format ex: #212121

#### **item_bg_color** _Text_

Background color for each item in json, example: #212121

#### **description** _Text_

Description for the template.

## Output

#### **html** _Text_

Converted html.
