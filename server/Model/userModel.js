const mysql = require('mysql')

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"book",
    connectionLimit:10
})
conn.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Database connected successfuly");
    }
})
module.exports = conn;