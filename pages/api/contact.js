export default async function handleEmail(req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'codngwthubaid@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: `${req.body.email}`,
        to: 'codngwthubaid@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    };
    try {
        await transporter.sendMail(mailData);
        res.status(200).json({ message: 'Your message has been delivered' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200);
    console.log(req.body);
    res.send('success');
}
