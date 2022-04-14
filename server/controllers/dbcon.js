const mysql = require("mysql");
const fs = require("fs");
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);


const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

exports.read = (req, res) => {
    connection.query(
        "SELECT * FROM board",
        (err, rows, fields) => {
            console.log(rows);
            res.send(rows);
        }
    )
}