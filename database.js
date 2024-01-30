import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "taxi_management_db",
  insecureAuth: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
0
export { connection };
