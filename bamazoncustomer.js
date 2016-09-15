var mysql      = require('mysql');
var prompt = require("prompt");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'Bamazon'
});
 
connection.connect();

 connection.query('SELECT ', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The products : ', rows[0].solution);
});

 prompt.start();

 prompt.get(Please Select, function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  proxy: ' + result.proxy);
    console.log('  credentials: ' + result.proxyCredentials);
  });


 
connection.end();
