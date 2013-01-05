var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "npm install -g mysql". */

var dbConnection = mysql.createClient({
  user: "",
  password: "",
  database: "chat"
});
/* You'll need to fill this out with your mysql username and password.
 * This is specifying that we're using the database called "chat", which we
 * created by running schema.sql.*/

dbConnection.connect();

/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

dbConnection.end();