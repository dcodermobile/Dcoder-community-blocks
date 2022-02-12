# Get Inbox of Canvas
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61f0824c89b3f1ccaa7bc254)

## Description
Get all conversations from your canvas mail with lastest to oldest

## Version
1.0.3
## Inputs
#### **domain**  *Text*
Domain of your institute (ex. sit.instructure.com)
#### **token**  *Text*
Follow these steps to get token from canvas
1. Open Canvas (or go to https://{your-school-domain}
2. Go to account -> settings (or go to 'https://{your-school-domain}/profile/settings')
3. Scroll down till Approved Integration and click on '+ New Access Token'
4. Write 'To use Canvas APIs' in purpose and hit Generate Token
5. That's it. You will see your token. 

## Output
#### **inboxList**  *JsonArray*
It returns an array of all your canvas conversations (Inbox messages)

