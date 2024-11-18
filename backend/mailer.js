// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services or an SMTP server
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
