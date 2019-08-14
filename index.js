
    var nodemailer = require('nodemailer');
  

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bell.b.love@gmail.com', // generated ethereal user
        pass: 'supavadimanasuvan' 
  }
});

var mailOptions = {
  from: 'bell.b.love@gmail.com',
  to: 'lekkla.tong@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'รักนะจุ้บๆ'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


