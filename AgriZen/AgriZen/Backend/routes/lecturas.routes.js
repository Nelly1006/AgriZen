import express from "express";
import { getLecturas, createLectura, deleteLectura } from "../controllers/lecturas.controller.js";

const router = express.Router();

router.get("/", getLecturas);
router.post("/", createLectura);
router.delete("/:id", deleteLectura);

export default router;
