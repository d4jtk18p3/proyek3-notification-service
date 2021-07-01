import nodemailer from 'nodemailer'

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NOTIF_EMAIL_EMAIL,
    pass: process.env.NOTIF_EMAIL_PW
  }
}

const transporter = nodemailer.createTransport(smtpConfig)

transporter.verify((err, success) => {
  if (err) return new Error(err)
  console.log('nodemailer config is correct')
})
