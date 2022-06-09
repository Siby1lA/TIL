const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PROT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

// 데이터 불러오기
connection.connect();
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

// 데이터 삽입
app.post("/api/customers", (req, res) => {
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?)";
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [name, birthday, gender, job];

  connection.query(sql, params, (err, rows, fileds) => {
    res.send(rows);
  });
});

// 데이터 삭제
app.delete("/api/customer/:id", (req, res) => {
  let sql = "DELETE FROM CUSTOMER WHERE id = ?";
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => res.send(rows));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
