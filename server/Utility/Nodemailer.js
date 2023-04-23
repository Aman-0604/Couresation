//Package to send Mail
const nodemailer = require("nodemailer");

//Creating Send Mail function and exporting it to primaey files
module.exports.sendMail = async function sendMail(str,data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "courseationStudyPartner@gmail.com",
      pass: "qoddlvbdujgunbon"
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
    oSubject = `Reset Passwords`;
    oHTML = `Here is your link to reset password. Please keep it secure. Additionally, it's important to follow best practices for password management to ensure the safety and security of your account.<br>
    Email: ${data.email}<br>ResetTokenLink: http//localhost:3000/resetPassword/${data.resetToken}`
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Courseation" <courseationStudyPartner@gmail.com>', // sender address
    to: data.email,
    subject: oSubject, // Subject line
    html: oHTML, // html body
  });

}

