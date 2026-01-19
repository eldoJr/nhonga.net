import { prisma } from "../../config/db.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { signAccessToken, signRefreshToken } from "../../utils/jwt.js";
import { generateOtp } from "./otp.service.js";
import { sendOtpEmail } from "./email.service.js";

export const register = async ({ email, phone, password, accountType }) => {
    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
        data: { email, phone, passwordHash, accountType },
    });

    const otp = await generateOtp({ userId: user.id, email, phone });

    if (email) await sendOtpEmail(email, otp);
    // SMS → integração futura

    return { message: "OTP enviado" };
};

export const verifyOtp = async ({ email, phone, otp }) => {
    const record = await prisma.otpVerification.findFirst({
        where: {
            email,
            phone,
            expiresAt: { gt: new Date() },
        },
        orderBy: { createdAt: "desc" },
    });

    if (!record) throw new Error("OTP inválido ou expirado");

    const valid = await comparePassword(otp, record.otpHash);
    if (!valid) throw new Error("OTP incorreto");

    await prisma.user.update({
        where: { id: record.userId },
        data: { isVerified: true },
    });

    await prisma.otpVerification.deleteMany({
        where: { userId: record.userId },
    });

    return { message: "Conta verificada com sucesso" };
};

export const login = async ({ identifier, password }) => {
    const user = await prisma.user.findFirst({
        where: {
            OR: [{ email: identifier }, { phone: identifier }],
        },
    });

    if (!user || !user.isVerified) throw new Error("Credenciais inválidas");

    const valid = await comparePassword(password, user.passwordHash);
    if (!valid) throw new Error("Credenciais inválidas");

    return {
        accessToken: signAccessToken({ sub: user.id, role: user.role }),
        refreshToken: signRefreshToken({ sub: user.id }),
    };
};
