import express from "express";
import FileController from "../controllers/fileController.js";

const router = express.Router();

// Define routes

router.post("/", FileController.createFile);
router.get("/", FileController.findAll);
router.delete("/:id", FileController.removeFile);
router.patch("/:id", FileController.updateFile)

export default router;