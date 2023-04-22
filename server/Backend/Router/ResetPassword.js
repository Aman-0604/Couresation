const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({extended: false })

const express = require("express");

const resetPasswordRouter = express.Router();

const conn = require("../Model/userModel");

resetPassword = async (req, res)=> {
    await conn.query(`select * from user where resetToken = "${req.params.id}";`, async (err,result)=>{
        if(err) {
            console.log(err);
            res.send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if(!result.length){
            // no such user found
            res.send("Not Registered!")
        }

        else {
            // yha ek form ke column me by deafult email dalni 
            // await conn.query(`select email from uuser where resetToken = "${req.}"`)
            res.send(result[0].name)
        }
    })
}
resetPasswordRouter.route("/:id") 
.get(resetPassword)
module.exports = resetPasswordRouter;