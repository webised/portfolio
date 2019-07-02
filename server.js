const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({
  /*service: 'gmail',
  auth: {
    user: 'gbenounicolas@gmail.com ',
    pass: 'C33pass!'
  }*/
    host: 'in-v3.mailjet.com',
    provider: 'mailjet',
    port: 587,
    secure: false,
    auth: {
        user: '794f11f4c67ae24b792bc3575e26297b',
        pass: '09b7348408d3234cbe64a1dbac9eb3b0'
    }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/send', function (req, res) {

    let senderName = req.body.contactFormName;
    let senderEmail = req.body.contactFormEmail;
    let messageSubject = req.body.contactFormSubjects;
    let messageText = senderName+' '+req.body.contactFormMessage;
    let copyToSender = '';

    let mailOptions = {
        to: ['gbenounicolas@gmail.com'], // Enter here the email address on which you want to send emails from your customers
        from: 'contact@webised.fr',
        subject: messageSubject,
        text: messageText,
        replyTo: senderEmail
    };

    if (senderName === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (senderEmail === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageSubject === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageText === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (copyToSender) {
        mailOptions.to.push(senderEmail);
    }

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end('error transporter.sendmail');
        } else {
            console.log('Message sent: ', response);
            res.end('sent');
        }
    });
});

app.listen(port, function () {
    console.log('Express started on port: ', port);
});
