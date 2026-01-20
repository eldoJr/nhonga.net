import { Router } from "express";
import authRoutes from "../modules/auth/authRoutes.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Seja bem vindo a API da nhonga.net" });
});

router.use("/auth", authRoutes);

export default router;
