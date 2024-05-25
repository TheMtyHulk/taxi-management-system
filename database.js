import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12709206",
  password: "H8mkUzDPWS",
  database: "sql12709206",
  insecureAuth: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
0
export { connection };
