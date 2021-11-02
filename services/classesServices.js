const connection = require("../database/db");
exports.classes = (callback) => {
  const sql = "SELECT * FROM CLASS";

  connection.query(sql, function (err, result) {
    if (err) callback(err, null);
    else callback(null, result);
  });
};
exports.addClass = (name, section, subject, callback) => {
  const queryName = name != null ? `"${name}"` : null;
  const querySection = section != null ? `"${section}"` : null;
  const querySubject = subject != null ? `"${subject}"` : null;
  const sql = `insert into CLASS (name,section,subject) values (${queryName},${querySection},${querySubject})`;
  connection.query(sql, function (err, result) {
    if (err) callback(err, null);
    else callback(null, "1 record inserted");
  });
};
