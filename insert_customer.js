var mysql = require('mysql');
var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
var sql = "insert into Costomors(name, address) values('Jason','Highway 37'),('Pond','Highway 38'),('Phuwin','Highway 39'),('Hanan','Highway 40'),('Tina','Highway 41')";

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Customer Created");
    });
});