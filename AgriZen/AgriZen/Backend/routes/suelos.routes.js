import express from "express";
import { getSuelos, createSuelo, deleteSuelo } from "../controllers/suelos.controller.js";

const router = express.Router();

router.get("/", getSuelos);
router.post("/", createSuelo);
router.delete("/:id", deleteSuelo);

export default router;
