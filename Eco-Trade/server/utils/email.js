const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendEmail({ to, subject, html, text }) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
    text,
  };
  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail }; 