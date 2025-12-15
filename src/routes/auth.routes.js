import { Router } from "express";
import { loginController } from "../controllers/auth.controllers.js";

const router = Router();
router.post("/login", loginController);

export default router;
