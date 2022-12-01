const nodemailer = require("nodemailer");

const sendEmail = async options => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'tttuab@gmail.com',
            pass: 'tdxjcypuxbwkkgcz'
        }
    });
    // tdxjcypuxbwkkgcz
    

    // send mail with defined transport object
    let message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        
    };

    return transporter.sendMail(message)
}

module.exports = sendEmail;