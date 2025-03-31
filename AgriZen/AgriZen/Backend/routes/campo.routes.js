import express from "express";
import { getCampos, createCampo, updateCampo, deleteCampo } from "../controllers/campo.controller.js";

const router = express.Router();

router.get("/", getCampos);
router.post("/", createCampo);
router.put("/:id", updateCampo);
router.delete("/:id", deleteCampo);

export default router;
