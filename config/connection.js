var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "loldave1",
  database: "heroku_7a87c0957445c26"
});

mysql://b0b91045270e9c:4c4b02b1@us-cdbr-iron-east-02.cleardb.net/heroku_7a87c0957445c26?reconnect=true

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;