const mysql = require("mysql");
const config = {
  host: "118.25.4.192",
  user: "root",
  password: "root~0606",
  database: "node_db",
};
const client = mysql.createConnection(config);
// sql语句
function sqlQuery(sql, callback) {
  client.query(sql, (err, result) => {
    if (err) {
      return console.log("错误");
    }
    callback(result);
  });
}

module.exports = sqlQuery;
