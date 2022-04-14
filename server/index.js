const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require("fs")
const mysql = require("mysql");
const board = require("./routes/route")
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);


const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect((err) => {                           
  if(err) throw err;
  console.log("MySQL Conected!!!");
});

app.use(express.json());
app.use(cors({
    origin: true,  
    credentials: true, 
}));
app.use('/board', board)

app.get("/getCookie", (req, res) => {
    res.send({Token:true})
})

app.listen(port, () => {
    console.log(`app.listen${port}`)
})