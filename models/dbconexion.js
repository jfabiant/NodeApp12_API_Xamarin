var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"18.219.74.140",
  port: "33060",
  user:"root",
  password:"YourRootPassword",
  // database:"tienda"
  database:"agendadb"
});
conn.connect();
module.exports = conn;

