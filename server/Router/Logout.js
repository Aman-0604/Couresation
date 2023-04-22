const express = require("express");
const LogoutRouter = express.Router();
LogoutRouter.route("/") 
.get(getLogout)

async function getLogout(req,res){
        res.cookie('isLogin','',{maxAge:1});
        res.send("Logged Out Successfully")
}

module.exports = LogoutRouter;