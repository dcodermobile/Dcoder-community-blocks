const MailComposer = require('nodemailer/lib/mail-composer')
const { google } = require('googleapis')
const fs = require('fs')

const main = async (inputs, auths, event) => {
  const filePath = inputs.filePath
  const to = inputs.to
  const html = inputs.html
  const text = inputs.text
  const subject = inputs.subject
  const from = inputs.from
  const cc = inputs.cc
  const bcc = inputs.bcc
  const replyTo = inputs.replyTo

  let attachments
  if (filePath) {
    const content = fs.readFileSync(filePath)
    let filename = ''
    if (filePath.lastIndexOf('/') > 0) {
      filename = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length)
    } else {
      filename = filePath
    }
    console.log(filename)
    attachments = [
      {
        filename: filename,
        content: Buffer.from(content).toString('base64'),
        encoding: 'base64'
      }
    ]
  }

  const options = {
    to: to,
    text: text,
    html: html,
    subject,
    textEncoding: 'base64'
  }
  if (from) {
    options.from = from
  }
  if (bcc) {
    options.bcc = bcc
  }
  if (cc) {
    options.cc = cc
  }
  if (replyTo) {
    options.replyTo = replyTo
  }
  if (attachments) {
    options.attachments = attachments
  }
  let mail = new MailComposer(options)

  const gmailAuth = new google.auth.OAuth2()
  gmailAuth.setCredentials({ access_token: auths.GMAIL.ACCESS_TOKEN })

  const msg = await mail.compile().build()
  const encodedMessage = Buffer.from(msg)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  const gmail = google.gmail({ version: 'v1', auth: gmailAuth })
  const result = await gmail.users.messages.send({
    userId: 'me',
    resource: {
      raw: encodedMessage
    }
  })
  console.log(result.data)
  return result.data
}

module.exports.main = main
