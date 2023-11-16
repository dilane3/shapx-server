import express from "express";
import ShapeController from "../controllers/shapeController.js";

const router = express.Router();

// Define routes

router.post("/", ShapeController.createShape);
router.delete("/:id", ShapeController.removeShape);
router.patch("/:id", ShapeController.updateShape)

export default router;