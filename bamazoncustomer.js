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
//------------------------------------------------------------------------------------
	//First function that prints the products. 
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
})

  	prompt.start();

 	prompt.get(schema, function (err, result) {
 				if (err) throw err;
 				// console.log('Command-line input received:');

 				selection = result.product_Id;
 				amount = result.quantity;

 				// showMeProduct();
 				checkingOut(selection,amount);
 		})

}//end of function showMeProduct
//------------------------------------------------------------------------------------
	//Second function that let the user purchase the products.
	function checkingOut(selection, amount) {
		connection.query('SELECT * FROM Bamazon.Products WHERE idProducts = ' + selection, function(err, result) {
		if (err) throw err;

			var productQ = selection -1;

			 if(productQ < 0 ){
			 	console.log("Not enough merchandise");
			 	
			 } else {
			 console.log('user may buy ' + result[0].ProductName)
		}
		
	});
};
// 	function updateProduct(){
// 		connection.query('UPDATE Bamazon.Products SET WHERE ? = ' + , function(err, result) {
// 	});
// };

 
// connection.end();
