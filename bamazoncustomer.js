var mysql      = require('mysql');
var prompt = require("prompt");
var colors = require('colors');

var connection = mysql.createConnection({
  host     : 'localhost',
  port 	   :  3306,
  user     : 'root',
  password : 'root',
  database : 'Bamazon'
});
 
connection.connect();

	var schema = {
    		properties: {
     	 		product_Id: {
        			message: colors.blue('Select your product by Id'),
        			required: true
      },
     			quantity: {
     				message: colors.blue('How many units of the product would you like to buy?'),
        			required: true
      }

    }

  };
	showMeProduct();
	function showMeProduct() {
 	connection.query('SELECT * FROM Bamazon.Products ', function(err, result) {
 			 	if (err) throw err;
 			
 			console.log(colors.red("Welcome to Bamazon!!")); 

 			for (var i = 0; i < result.length; i++){
			console.log(result[i].idProducts + " " + "'" + 
						result[i].ProductName + "'" + " " + 
						result[i].DepartmentName + colors.green(" $") + 
						result[i].Price + " " + 
						result[i].StockQuantity + colors.magenta(" Units"));	
		}
});

  	prompt.start();

 	prompt.get(schema, function (err, result) {
 				if (err) throw err;
 				// console.log('Command-line input received:');
 				console.log(product_Id.result);
 				console.log(quantity.result);

 				selection = result.idProducts;
 				amount = result.StockQuantity;

 				showMeProduct();
 				checkingOut(selection,amount);
  });

}//end of function showMeProduct

	function checkingOut(idpro, qua) {
		connection.query('SELECT * FROM Bamazon.Products WHERE idProducts = ' + idpro, function(err, result) {
		if (err) throw err;
		console.log()

	});
};

 
// connection.end();
