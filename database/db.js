const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "huytung25520",
  database: "gradingsystemdb",
});
module.exports = connection;
