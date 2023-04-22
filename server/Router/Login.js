const express = require("express");
const LoginRouter = express.Router();

// for creating cookie to check whether one is logged in or not 
const jwt = require("jsonwebtoken");
const jwt_key = "dssad234132cds2yththet13";

const bcrypt = require("bcrypt");

const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({ extended: false })

const conn = require("../Model/userModel");
 

async function setLogin(req,res){
    a = req.body;
    //finding user to be verified 
    await conn.query(`select * from user where email = "${a.Email}";`, async (err,result)=>{
        if(err) {
            console.log(err);
            res.send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if(!result.length){
            // no such user found
            res.send("Not Registered!")
        }

        else {
            // checking password 
            const t = await bcrypt.compare(a.Password,result[0].password); 
            if(t){
                const token = jwt.sign({uid:result[0].email},jwt_key); 
                //creating cookies
                res.cookie('isLogin',token);
                res.send("Logged Successfully")
            }
            else{
                res.send("Incorrect Password")
            }
        }
    })
}

LoginRouter.route("/") 
.post(sa,setLogin)
module.exports = LoginRouter;