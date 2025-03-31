import express from "express";
import { getPlagas, createPlaga, updatePlaga, deletePlaga } from "../controllers/plagas.controller.js";

const router = express.Router();

router.get("/", getPlagas);
router.post("/", createPlaga);
router.put("/:id", updatePlaga);
router.delete("/:id", deletePlaga);

export default router;
