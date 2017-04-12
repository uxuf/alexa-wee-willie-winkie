Wee Willie Winkie
=================

Wee Willie Winkie is a little app for Amazon Alexa/Echo built with alexa-sdk [https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs]

Install
---
`git clone alexa-wee-willie-winkie`

`cd alexa-wee-willie-winkie`

`npm install`

Uploading to Amazon Lambda
---
For uploading to Amazon Lambda, **zip up the files in the folder, making sure that you do not zip up the folder itself**. This distinction is important, Lambda is iffy with zip folder structures it doesn't understand.

The following is proven to work:

`cd alexa-wee-willie-winkie`

`zip -r ../alexa-wee-willie-winkie.zip *`

Note that uploading `node_modules` is expected and required in order for the skill to execute on Amazon Lambda.

Upload the file `../alexa-wee-willie-winkie.zip` to Amazon Lambda.

Configuring the Alexa Skill in Amazon Developer Portal
---
Use `intentSchema.json` and `utterances` for the relevant sections for configuring the Alexa Skill.