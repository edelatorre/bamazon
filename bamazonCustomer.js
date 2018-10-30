var mysql = require("mysql");
require("dotenv").config();

let dataKeys = require("./keys.js");

var connection = mysql.createConnection(dataKeys.mySql);

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });

  function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }