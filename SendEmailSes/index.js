const mail = require("./mail")
const fs = require("fs")

module.exports.main =
async(inputs, auths, context) => {
var SES_KEY =  inputs.SES_KEY    
var SES_SECRET =  inputs.SES_SECRET    
var SES_REGION =  inputs.SES_REGION    
var SENDER =  inputs.SES_SENDER   
var MAIL_TO =  inputs.MAIL_TO  
var MAIL_SUBJECT =  inputs.MAIL_SUBJECT
var MAIL_BODY =  inputs.MAIL_BODY
const attachmentList = inputs.attachmentList
let attachments = []
if( Array.isArray(attachmentList)){
  attachmentList.forEach(item =>{
    let filename =""
    if(item.lastIndexOf('/')>0){
      filename = item.substring(item.lastIndexOf('/'), item.length)
    }else{
      filename = item
    }
    attachments.push({
      filename: filename,
      path: item
    })
  })
}

await mail.sendMailSES(SES_KEY, SES_SECRET, SES_REGION , SENDER, MAIL_TO, MAIL_SUBJECT, MAIL_BODY, attachments)
}