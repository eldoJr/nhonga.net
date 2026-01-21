import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import { getOtpEmailTemplate, getPasswordResetEmailTemplate } from "../../utils/emailTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER || process.env.MAIL_USER,
        pass: process.env.SMTP_PASS || process.env.MAIL_PASS,
    },
});

export const sendOtpEmail = async (to, otp, firstName) => {
    const mailOptions = {
        from: {
            name: process.env.FROM_NAME || 'nhonga.net',
            address: process.env.FROM_EMAIL || process.env.SMTP_USER || process.env.MAIL_USER,
        },
        to,
        subject: `${otp} é o seu código de verificação - nhonga.net`,
        html: getOtpEmailTemplate(firstName, otp)
    };

    await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (to, token, firstName) => {
    const mailOptions = {
        from: {
            name: process.env.FROM_NAME || 'nhonga.net',
            address: process.env.FROM_EMAIL || process.env.SMTP_USER || process.env.MAIL_USER,
        },
        to,
        subject: `Recuperar palavra-passe - nhonga.net`,
        html: getPasswordResetEmailTemplate(firstName, token)
    };

    await transporter.sendMail(mailOptions);
};
