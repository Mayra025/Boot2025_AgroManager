import express from "express";
import { getDashboardData } from "../controllers/inicioController.js";

const router = express.Router();

// GET /api/inicio/dashboard
router.get("/dashboard", getDashboardData);

export default router;
