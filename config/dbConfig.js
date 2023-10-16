const mysql = require("mysql2");

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task_management",
});

connectDB.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

connectDB.end((err) => {
  if (err) {
    console.error("Error closing the database connection:", err);
    return;
  }
  console.log("Connection closed");
});

module.exports = connectDB;
