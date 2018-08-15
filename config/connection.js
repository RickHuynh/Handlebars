//Connect to my sql, and export it for use in the ORM
var mysql = require("mysql");
var pw = require("../password");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pw,
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    connection.query("select * from burgers", function(err,result){
        console.log(result);
    })
});

module.exports = connection;