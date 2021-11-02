const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "database-1.cjzq5y6iqkqb.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "Tung2021",
  database: "gradingsystemdb",
});
module.exports = connection;
