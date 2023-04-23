const express = require("express");
const LoginRouter = express.Router();

// for creating cookie to check whether one is logged in or not 
const jwt = require("jsonwebtoken");
const jwt_key = "dssad234132cds2yththet13";

const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({ extended: false })

const bcrypt = require("bcrypt");

const conn = require("../Model/userModel");


async function setLogin(req, res) {
    a = req.body;
    //finding user to be verified 
    await conn.query(`select * from user where email = "${a.email}";`, async (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if (!result.length) {
            // no such user found
            res.status(400).send("User not Registered!")
        }

        else {
            // checking password 
            let success = false;
            const t = await bcrypt.compare(a.password, result[0].password);
            if (t) {
                const token = jwt.sign({ uid: result[0].email }, jwt_key);
                success = true;
                console.log(token);
                res.cookie('isLogin', token);
                res.send({ success, token });
            }
            else {
                res.status(400).json('Invalid Credentials');
            }
        }
    })
}

LoginRouter.route("/")
    .post(sa, setLogin)
module.exports = LoginRouter;