const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql-container",
  user: "root",
  password: "root",
  database: "testdb"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.post("/register", (req, res) => {
  const { name, email, phone } = req.body;

  const sql =
    "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";

  db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("User Registered Successfully");
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});