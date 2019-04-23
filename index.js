var express = require('express');
const nodemailer = require("nodemailer");
var app = express();


app.get('/', function (req, res) {
	let transporter = nodemailer.createTransport({
	    host: "smtp.gmail.com",
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	      user: 'example@gmail.com', // generated ethereal user
	      pass: 'examplePassword' // generated ethereal password
	    }
	  });
	let info =  transporter.sendMail({
	    from: '"Fred Foo 👻" <example@gmail.com>', // sender address
	    to: "example2@gmail.com", // list of receivers
	    subject: "Hello ✔", // Subject line
	    text: "Hello world?", // plain text body
	    html: "<b>Hello world?</b>" // html body
	  });
	res.send('hello world');
});

app.listen(3000, () => {
	console.log("Server is up and listering on 3000");
});
