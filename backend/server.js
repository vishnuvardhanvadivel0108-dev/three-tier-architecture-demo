const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "testdb",
  port: 3306
});

db.getConnection((err, connection) => {

  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
    connection.release();
  }

});

app.post("/register", (req, res) => {

  const { name, email, phone } = req.body;

  const sql =
    "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";

  db.query(sql, [name, email, phone], (err, result) => {

    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send("User Registered Successfully");
    }

  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});