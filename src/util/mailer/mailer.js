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

export const sendEmail = async (subject, bodyEmail, listEmail) => {
  transporter.sendMail(
    {
      from: 'Politeknik Negeri Bandung',
      to: listEmail,
      subject: subject,
      html: bodyEmail
    },
    (err, info) => {
      if (err) {
        console.log(err)
        return err
      }
      console.log(info)
      return info
    }
  )
}
