var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3318193",
  password: "8PeUg3zyPX",
  database: "sql3318193"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Database Connect")
});

module.exports = con;
