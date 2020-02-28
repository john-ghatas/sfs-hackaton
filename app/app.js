import express from "express";
import mariadb from "mariadb";
import dotenv from "dotenv";
import routes from "./routes";
import cors from "cors";
import parser from "body-parser";

console.log();

// Initialize
const PORT = 4000;
const server = express();
server.use(cors());
server.use(parser.json());
dotenv.config({
  path: process.env.npm_lifecycle_event === "test" ? ".env.test" : ".env"
});

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
routes.forEach(([key, value]) => {
  switch (value.method) {
    case "GET":
      server.get(key, (req, res) => value.call(req, res, database));
      break;
    case "POST":
      server.post(key, (req, res) => value.call(req, res, database));
      break;
    default:
      break;
  }
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

export { server, database };
