const express = require("express");

const ForgetPasswordRouter = express.Router();
//For readign body content
const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({extended: false })

const conn = require('../Model/userModel');
//For creating reset Token
const crypto = require("crypto");

const {sendMail} = require("../Utility/Nodemailer");


ForgetPassword = async function (req, res) {
    a = req.body;
    //Checking mail provided by user is present in DB or not
    await conn.query(`select * from user where email = "${a.email}";`, async (err,result)=>{
        if(err) {
            console.log(err);
            res.send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if(!result.length){
            //No such user found
            res.send("Not Registered!")
        }
        else {
            //creating Reset token
            const RT = crypto.randomBytes(32).toString('hex');
            //saving token in DB
            await conn.query(`update user set resetToken="${RT}" where email="${a.email}"`,async (err)=>{
                
                if(err) {
                    console.log(err);
                    res.send("Some error Occured,inconvenience cost is deeply regretted")
                }
                else{
                    //Selecting content that must be given to nodemailer
                    await conn.query(`select name,resetToken,email from user where email="${a.email}"`,async (err,result2)=>{
                        if(err){
                            console.log(err);
                            res.send("Some error Occured,inconvenience cost is deeply regretted")
                        }
                        else{
                            sendMail("ResetPassword",result2[0]);
                            res.json({"success":true})
                        }
                    })
                }
            })      
        }
    })
}

ForgetPasswordRouter.route("/") 
.post(sa,ForgetPassword);
module.exports = ForgetPasswordRouter;

// this page will render user to a form containing a single column with field new password  