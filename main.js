import express from "express";
import cors from "cors";
import { config } from "dotenv";
import FileRouter from "./routers/fileRouter.js";
import { migrations } from "./db/index.js";

// Config
config();

const { PORT } = process.env || 5050;

const app = express();

// Setting global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// Setting routers
app.use("/files", FileRouter)

// Launch the app
app.listen(PORT, async () => {
  console.log(`App is alive on http://localhost:${PORT}`);

  console.log("");

  // Launch migrations
  migrations();
})