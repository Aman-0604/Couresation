const express = require("express");

const SignUpRouter = express.Router();
// For reading body text
const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({ extended: false })

const conn = require('../Model/userModel');

const bcrypt = require("bcrypt");

const {sendMail} = require("../Utility/Nodemailer");
//For encoding
addingSalt = async (password)=> {
    const s = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, s);
    return hash;
}

setSignUp = async function (req, res) {
    const a = req.body;
    // Checking for duplicate entry
    await conn.query(`select * from user where email = "${a.Email}";`, async (err,result)=>{
        if(err) {
            console.log(err);
            res.send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if(result.length){
            // Duplicate Entry Found
            res.send("Already Registered! Try Login Instead")
        }

        else {
            //Adding Salt
            a.Password = await addingSalt(a.Password);
            conn.query(`insert into user(name,email,password) values("${a.Name}","${a.Email}","${a.Password}");`, (err)=>{
                if(err) {
                    console.log(err);
                    res.send("Some error Occured,inconvenience cost is deeply regretted")
                }
                else{
                    sendMail("SignedUp",a);
                    res.send("User created Successfully")
                }
            })      
        }
    })
}

SignUpRouter
.route("/")
.post(sa,setSignUp)
module.exports = SignUpRouter;