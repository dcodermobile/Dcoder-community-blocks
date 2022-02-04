# Get File Contents From Google Drive
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61fd54907c0bef453a445065)

## Description
This block will return the contents of a specified file on google drive

## Inputs
#### **fileId**  *Text*
The ID of the file.
#### **acknowledgeAbuse**  *Boolean*
Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
#### **supportsTeamDrives**  *Boolean*
Deprecated use supportsAllDrives instead.
#### **alt**  *Text*
Data format for the response.
#### **fields**  *Text*
Selector specifying which fields to include in a partial response.
#### **prettyPrint**  *Boolean*
Returns response with indentations and line breaks.
#### **quotaUser**  *Text*
An opaque string that represents a user for quota purposes. Must not exceed 40 characters.

## Output
#### **fileData**  *Text*
Content of a google drive file

