const nodemailer = require('nodemailer')
const aws = require("aws-sdk")


module.exports.sendMail = function (SMTP_HOST, SMTP_PORT,SMTP_USER, SMTP_PASSWORD, MAIL_TO, MAIL_SUBJECT, MAIL_BODY) {
    const transporter = nodemailer.createTransport( {

        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: SMTP_USER,
        to: MAIL_TO,
        subject: MAIL_SUBJECT,
        html: MAIL_BODY
    }

    transporter.sendMail(mailOptions, (err, info) => {

        if (err) {

            return console.log(err)

        }

        console.log(info)

    })
}


module.exports.sendMailSES = function (accessKey, secretKey, region, SENDER, MAIL_TO, MAIL_SUBJECT, MAIL_BODY, attachments) {

    
    const transporter = nodemailer.createTransport( {

        SES: new aws.SES({
          apiVersion: "2010-12-01",
          accessKeyId: accessKey,
          secretAccessKey: secretKey,
          region: region
        })
    })

    const mailOptions = {
        from: SENDER,
        to: MAIL_TO,
        subject: MAIL_SUBJECT,
        html: MAIL_BODY,
        attachments
    }

    transporter.sendMail(mailOptions, (err, info) => {

        if (err) {

            return console.log(err)

        }

        console.log(info)

    })
}
