# Android app reviews
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60e602cae01862ff914e5e97)

## Description
Returns the reviews of an Android application using service account key and  package name.

## Inputs
#### **packageName**  *Text*
Enter the package name
#### **language**  *Text*
Translation language, specify with or without country I.e en, en_US,en_GB are all valid.
#### **serviceAccountText**  *Text*
Your Google service account json as text. Get it from Google api console with android publisher permissions.

## Output
#### **reviews**  *JsonObject*
Returns all the latest reviews

