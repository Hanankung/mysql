var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "update costomors SET address='Canyon' where name='Hanan'";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result.affectedRows +  " record(s) updated");
        
    });
});