# Github Trends

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6176ff122a862d5d54e6a242)

## Description

GitHub trends, get Github trending repositories or trending developers.

## Inputs

#### **section** _Text_

Optional, the value can be 'repositories' or 'developers', default is repositories.
Provide language in case you select developers.

#### **language** _Text_

Optional, programming language for ex 'javascript', 'java', default empty means 'all'.

#### **since** _Text_

Period, can be 'daily', 'weekly', 'monthly'. default empty means daily.

#### **spoken_language_code** _Text_

Language code, default or empty means all, values can be es en zh etc.

## Output

#### **resultArray** _JsonArray_

Array of repos or developers.
