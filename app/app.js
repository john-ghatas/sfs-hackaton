import express from "express";
import mariadb from "mariadb";
import dotenv from "dotenv";
import routes from "./routes";

// Initialize
const PORT = 4000;
const server = express();
dotenv.config();

// Connecting to the SQL database
const database = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "sfs",
  connectTimeout: 30000
});

database
  .getConnection()
  .then(() => {
    console.log(
      `Successfully connected to MySQL database at ${process.env.DB_HOST}:${process.env.DB_PORT}.`
    );
  })
  .catch(err => {
    console.error(err);
    process.exit();
  });

// Getting all routes and applying them
Object.entries(routes).forEach(([key, value]) => {
  server.use(key, (req, res) => value(req, res, database));
});

// Running the server
server.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}.`);
});

// Allow graceful closure of database connection
process.on("SIGINT", () => {
  database.end();
  process.exit();
});
