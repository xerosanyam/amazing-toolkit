import nodemailer from 'nodemailer'
let mailTransport = nodemailer.createTransport(
  `smtps://randomKeyForInit:randomKeyForInit@randomKeyForInit`
)

const init = ({
  email,
  password,
  provider = 'smtp.gmail.com'
}: {
  email: string
  password: string
  provider: string
}) => {
  mailTransport = nodemailer.createTransport(
    `smtps://${email}:${password}@${provider}`
  )
}

const sendMail = ({
  toEmail,
  subject,
  msg,
  fromEmail,
  displayName
}: {
  toEmail: string
  subject: string
  msg: string
  fromEmail: string
  displayName: string
}) => {
  const mailOptions = {
    from: `${displayName}${fromEmail}`,
    html: msg,
    replyTo: fromEmail,
    subject,
    to: toEmail
  }
  return mailTransport.sendMail(mailOptions)
}

export default {
  init,
  sendMail
}
