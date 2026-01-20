import bcrypt from "bcrypt";
import { prisma } from "../../config/db.js";

export const generateOtp = async ({ userId, email, phone }) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);

    await prisma.otpVerification.create({
        data: {
            userId,
            email,
            phone,
            otpHash,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        },
    });

    return otp;
};
