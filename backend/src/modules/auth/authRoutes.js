import { Router } from "express";
import * as AuthController from "./authController.js";

const router = Router();

router.post("/register", AuthController.register);
router.post("/verify-otp", AuthController.verifyOtp);
router.post("/login", AuthController.login);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/verify-reset-otp", AuthController.verifyResetOtp);
router.post("/reset-password", AuthController.resetPassword);

// Rota de teste
router.get("/test", (req, res) => {
    res.json({ message: "Auth routes working", timestamp: new Date().toISOString() });
});

export default router;
