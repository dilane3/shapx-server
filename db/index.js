import mysql from "mysql2/promise";
import FileRepository from "../repositories/fileRepository.js";
import ShapeRepository from "../repositories/shapeRepository.js";
import { config } from "dotenv";

// Config
config();

const {
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD
} = process.env

// create the connection
const connection = await mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD
});

// Initialization of the schema of the database
const migrations = async () => {
  // Get a repository for files
  const fileReposiroty = new FileRepository();
  const shapeRepository = new ShapeRepository();

  console.log("Launching migrations...\n");

  // Create files tables
  await fileReposiroty.init();
  await shapeRepository.init();
}

export default connection;

export {
  migrations
}
