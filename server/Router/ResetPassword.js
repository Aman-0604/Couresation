const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({extended: false })

const express = require("express");
const bcrypt = require("bcrypt");

const resetPasswordRouter = express.Router();

const conn = require("../Model/userModel");

addingSalt = async (password) => {
    const s = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, s);
    return hash;
}
resetPassword = async (req, res)=> {
    a = req.body;
    await conn.query(`select * from user where resetToken = "${a.resetToken}";`, async (err,result)=>{
        if(err) {
            console.log(err);
            res.send("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if(!result.length){
            res.json({"success":false});
        }
        
        else {
            a.password = await addingSalt(a.password);
            await conn.query(`update user set password = "${a.password}" , resetToken=null where resetToken = "${a.resetToken}";`),
             (err,result)=>{
                if(err) {
                    console.log(err);
                    res.send("Some error Occured,inconvenience cost is deeply regretted")
                }
                else{
                    res.json({"success":true});
                }
            }
        }
    })
}
resetPasswordRouter.route("/")
.post(resetPassword)
module.exports = resetPasswordRouter;