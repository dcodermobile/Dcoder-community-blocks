# Get TODO list from Canvas

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61f04d0f89b3f19b9f7bb640)

## Description

Returns a todo list from canvas including assignments, quizzes, discussion, etc.

## Version

1.0.3

## Inputs

#### **domain** _Text_

Domain of your institute (ex. sit.instructure.com)

#### **token** _Text_

Follow these steps to get token from canvas

1. Open Canvas (or go to https://{your-school-domain}
2. Go to account -> settings (or go to 'https://{your-school-domain}/profile/settings')
3. Scroll down till Approved Integration and click on '+ New Access Token'
4. Write 'To use Canvas APIs' in purpose and hit Generate Token
5. That's it. You will see your token.

## Output

#### **todoList** _JsonArray_

It returns an array of your TODO list with every detail associated with the tasks. It includes assignments, quizzes, discussion, etc.
