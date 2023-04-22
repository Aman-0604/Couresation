const mysql = require('mysql')

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"book",
    connectionLimit:10
})
conn.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Good to go");
    }
})
module.exports = conn;