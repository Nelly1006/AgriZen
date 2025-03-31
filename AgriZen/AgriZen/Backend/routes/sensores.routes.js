import express from "express";
import { getSensores, createSensor, deleteSensor } from "../controllers/sensores.controller.js";

const router = express.Router();

router.get("/", getSensores);
router.post("/", createSensor);
router.delete("/:id", deleteSensor);

export default router;
