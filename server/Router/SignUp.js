const express = require("express");
const SignUpRouter = express.Router();

// For reading body text
const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({ extended: false })

// for creating cookie to check whether one is logged in or not 
const jwt = require("jsonwebtoken");
const jwt_key = "dssad234132cds2yththet13";

const conn = require('../Model/userModel');

const bcrypt = require("bcrypt");

const {sendMail} = require("../Utility/Nodemailer");


//For encoding
addingSalt = async (password) => {
    const s = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, s);
    return hash;
}

setSignUp = async function (req, res) {
    const a = req.body;
    // console.log(a);
    // Checking for duplicate entry
    await conn.query(`select * from user where email = "${a.email}";`, async (err, result) => {
        // console.log("result", result)
        if (err) {
            console.log(err);
            res.status(500).send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if (result.length) {
            // Duplicate Entry Found
            res.status(400).send("Already Registered! Try Login Instead")
        }

        else {
            //Adding Salt
            let success = false;
            a.password = await addingSalt(a.password);
            console.log("email", a.email)
            console.log("hash:", a.password);
            conn.query(`insert into user(name,email,password) values("${a.name}","${a.email}","${a.password}");`, (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).send("Some error Occured,inconvenience cost is deeply regretted")
                }
                else {
                    sendMail("SignedUp", a);
                    success = true;
                    const token = jwt.sign({ uid: a.email }, jwt_key);
                    // res.cookie('isLogin', token);
                    res.json({ success, token })
                }
            })
        }
    })
}

SignUpRouter
    .route("/")
    .post(sa, setSignUp)
module.exports = SignUpRouter;