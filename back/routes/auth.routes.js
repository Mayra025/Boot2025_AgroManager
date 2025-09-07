import { Router } from "express";
import { login, register, me } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", requireAuth, me); // ejemplo protegido

export default router;
