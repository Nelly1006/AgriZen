import express from "express";
import { getAlertas, createAlerta, deleteAlerta } from "../controllers/alertas.controller.js";

const router = express.Router();

router.get("/", getAlertas);
router.post("/", createAlerta);
router.delete("/:id", deleteAlerta);

export default router;
