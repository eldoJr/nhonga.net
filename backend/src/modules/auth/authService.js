import { prisma } from "../../config/db.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { signAccessToken, signRefreshToken } from "../../utils/jwt.js";
import { generateOtp } from "./otpService.js";
import { sendOtpEmail, sendPasswordResetEmail } from "./emailService.js";

export const register = async ({ firstName, lastName, email, phone, username, password, accountType }) => {
    try {
        // Verificar se username já existe
        if (username) {
            console.log('Checking username:', username);
            const existingUser = await prisma.user.findUnique({ where: { username } });
            if (existingUser) throw new Error("Nome de usuário já existe");
        }

        const passwordHash = await hashPassword(password);
        console.log('Creating user with data:', { email, phone, username, accountType });

        const user = await prisma.user.create({
            data: { email, phone, username, passwordHash, accountType },
        });

        const otp = await generateOtp({ userId: user.id, email, phone });

        if (email) await sendOtpEmail(email, otp, firstName);
        // SMS → integração futura

        return { message: "OTP enviado", userId: user.id, firstName, lastName };
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
};

export const verifyOtp = async ({ email, phone, otp, firstName, lastName }) => {
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

    // Atualizar usuário e criar perfil
    const user = await prisma.user.update({
        where: { id: record.userId },
        data: { isVerified: true },
        include: { profile: true },
    });

    // Criar perfil se não existir
    if (!user.profile && firstName && lastName) {
        await prisma.profile.create({
            data: {
                userId: user.id,
                firstName,
                lastName,
            },
        });
    }

    await prisma.otpVerification.deleteMany({
        where: { userId: record.userId },
    });

    return { message: "Conta verificada com sucesso" };
};

export const login = async ({ identifier, password }) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: identifier }, { phone: identifier }, { username: identifier }],
            },
            include: { profile: true },
        });

        if (!user || !user.isVerified) throw new Error("Credenciais inválidas");

        const valid = await comparePassword(password, user.passwordHash);
        if (!valid) throw new Error("Credenciais inválidas");

        const tokenPayload = {
            sub: user.id,
            userId: user.id,
            email: user.email,
            username: user.username,
            accountType: user.accountType,
            firstName: user.profile?.firstName || '',
            lastName: user.profile?.lastName || '',
            role: user.role
        };

        return {
            accessToken: signAccessToken(tokenPayload),
            refreshToken: signRefreshToken({ sub: user.id }),
        };
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const forgotPassword = async ({ email }) => {
    try {
        const user = await prisma.user.findUnique({ 
            where: { email },
            include: { profile: true }
        });
        
        if (!user) {
            return { message: "Se o email existir, receberá um código de verificação" };
        }
        
        const resetToken = await generateOtp({ userId: user.id, email });
        
        await sendPasswordResetEmail(email, resetToken, user.profile?.firstName || 'Usuário');
        
        return { message: "Código de verificação enviado para o seu email" };
    } catch (error) {
        console.error('Forgot password error:', error);
        throw new Error("Erro ao processar solicitação");
    }
};

export const verifyResetOtp = async ({ email, otp }) => {
    try {
        const record = await prisma.otpVerification.findFirst({
            where: {
                email,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: "desc" },
        });
        
        if (!record) throw new Error("Código inválido ou expirado");
        
        const valid = await comparePassword(otp, record.otpHash);
        if (!valid) throw new Error("Código incorreto");
        
        return { message: "Código verificado com sucesso" };
    } catch (error) {
        console.error('Verify reset OTP error:', error);
        throw error;
    }
};

export const resetPassword = async ({ email, token, newPassword }) => {
    try {
        const record = await prisma.otpVerification.findFirst({
            where: {
                email,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: "desc" },
        });
        
        if (!record) throw new Error("Token inválido ou expirado");
        
        const valid = await comparePassword(token, record.otpHash);
        if (!valid) throw new Error("Token incorreto");
        
        const passwordHash = await hashPassword(newPassword);
        await prisma.user.update({
            where: { id: record.userId },
            data: { passwordHash },
        });
        
        await prisma.otpVerification.deleteMany({
            where: { userId: record.userId },
        });
        
        return { message: "Palavra-passe alterada com sucesso" };
    } catch (error) {
        console.error('Reset password error:', error);
        throw error;
    }
};
