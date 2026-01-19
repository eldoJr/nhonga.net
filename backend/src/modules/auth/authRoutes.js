import { Router } from "express";
import * as AuthController from "./authController.js";

const router = Router();

router.post("/register", AuthController.register);
router.post("/verify-otp", AuthController.verifyOtp);
router.post("/login", AuthController.login);

export default router;
