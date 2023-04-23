//Package to send Mail
const nodemailer = require("nodemailer");

//Creating Send Mail function and exporting it to primaey files
module.exports.sendMail = async function sendMail(str,data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "abhishekgoyal11aug2003@gmail.com",
      pass: "xuknxfrzyfuranfx"
    },
  });


  var oSubject,oHTML;
  //For specifing New Registration
  if(str=="SignedUp"){
    oSubject =`Thank You ${data.name} for choosing Courseation !!!!`;
    oHTML = `<h2> Start Learning with Courseation <br> India's largest learning platform </h2>`
  }
  //For specifing that user wants to erset his/her password 
  else if(str=="ResetPassword"){
    oSubject = `Reset Passwors Link`;
    oHTML = `Here is a link to reset your password<br>
    Link: <h1>http://localhost:8000/resetPassword/${data.resetToken}</h1>
    <br>Click on the Link and set new Password`
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Courseation" <abhishekgoyal11aug2003@gmail.com>', // sender address
    to: data.email,
    subject: oSubject, // Subject line
    html: oHTML, // html body
  });

}

