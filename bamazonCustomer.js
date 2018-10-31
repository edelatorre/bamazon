var mysql = require("mysql");
require("dotenv").config();
var inquirer = require("inquirer");

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
      inquirer.prompt([
 
        {
            type: "input",
            name: "productId",
            message: "Enter de ID of the product you want."
        },
    
        {
            type: "input",
            name: "units",
            message: "How many units of the product would you like to buy?"
        }
    
        ]).then(function(purchase) {
            console.log(`You want to purchase ${purchase.units} units of the product ID = ${purchase.productId}`);
            checkStock(purchase.productId, purchase.units);
            
        });
      //connection.end();
    });
  };


  function checkStock(IdProd, unidades) {
    console.log("Checking stock of the product...\n");
    var query = connection.query("SELECT stock_quantity FROM products where ?",
    [
        {
            item_id: IdProd
        }
    ] 
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      //console.log(res);
      var stock = res[0].stock_quantity
      console.log(`This product has ${stock} units on stock`);
      if(stock >= unidades){
          console.log('You can proceed with your purchase, there are enough units on stock')
      }else{
          console.log('Insufficient quantity!');
          connection.end();
      }  

      connection.end();
    });
    //console.log(query.sql);
  }