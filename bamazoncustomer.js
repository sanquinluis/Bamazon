var mysql      = require('mysql');
var prompt = require("prompt");
var connection = mysql.createConnection({
  host     : 'localhost',
  port 	   :  3306,
  user     : 'root',
  password : 'root',
  database : 'Bamazon'
});
 
connection.connect();

 	connection.query('SELECT * FROM Bamazon.Products ', function(err, results) {
 			 	if (err){
 			 		console.log(err);
 		} 
 			 	else {

 			 	for(var i = 0; i<results.length; i++){
 			 		console.log(results[i]);
 			 		console.log(results[i].ProductName);
 			 		console.log(results[i].DepartmentName);
 			 		console.log(results[i].Price);
 			 		console.log(results[i].StockQuantity);
  				}
  			}

});

 prompt.start();

 // 	prompt.get(Product Information, function (err, result) {
 //   			var buy = {
	// 			ItemID: result.ItemID,
	// 			Quantity: result.StockQuantity
	// }
    
 //  });


 
connection.end();
