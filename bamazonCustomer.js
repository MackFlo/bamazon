
var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});
connection.connect(function(err){
    if (err) throw err;
    console.log ("connected as id " + connection.threadId);
    selectProduct();
});


function selectProduct(){
    inquirer.prompt({
        name: "itemChoice",
        type: "input",
        message: "What would you like to purchase from our site? \n Please use the 3 digit ID of the product."},
        {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
        })
        .then (function(itemAnswer){
        var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM bamazon WHERE ?";
        connection.query(query, {item_id: itemAnswer.itemChoice }, function(err, res){
            for (var i =0; i < res.length; i++){
                console.log("ID: " + res[i].item_id +"|| Category: "+ res[i].department_name +"|| Product: " + res[i].product_name + "|| Price: " + res[i].price);
            }if (res[i].stock_quantity > parseInt(itemAnswer.quantity)){
                connection.query(
                    "UPDATE bamazon SET ? WHERE ?",
                    [
                        {
                            stock_quantity: stock_quantity - itemAnswer.quantity
                        },
                    ],
                    function(error) {
                        if (error) throw err;
                        console.log("You've made a purchase");
                        selectProduct();
                    }
                )
            }
        })
    })
};
