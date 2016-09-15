var mysql      = require('mysql');
var prompt = require("prompt");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'Bamazon'
});
 
connection.connect();

 	connection.query('SELECT * FROM Bamazon.Products ', function(err, rows, column) {
 			 	if (err) throw err;

 			 	for(var i = 0; i<column.length; i++){
  				console.log('The Products Id:', rows[i].idProducts)
  				console.log('The Product Name:', rows[i].ProductName)
  				console.log('The Department Name:', rows[i].DepartmentName)
  				console.log('The Product Price:', rows[i].Price + ' Dollars');
  			}

});

 prompt.start();

 	prompt.get(Product Information, function (err, result) {
   			var purchase = {
				ItemID: result.ItemID,
				Quantity: result.StockQuantity
	}
    
  });


 
connection.end();
