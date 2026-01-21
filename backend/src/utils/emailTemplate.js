export const getOtpEmailTemplate = (firstName, otpCode) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verificação de Conta - nhonga.net</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
            <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #007bff;">
                <h1 style="color: #007bff; margin: 0; font-size: 28px;">nhonga.net</h1>
                <p style="color: #666; margin: 5px 0 0 0;">Conectando Talentos em Moçambique</p>
            </div>
            
            <div style="padding: 30px 20px;">
                <h2 style="color: #333; margin-bottom: 20px;">Olá ${firstName}!</h2>
                
                <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
                    Bem-vindo à nhonga.net! Para completar o seu registo, por favor use o código de verificação abaixo:
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <div style="background-color: #f8f9fa; border: 2px dashed #007bff; border-radius: 8px; padding: 20px; display: inline-block;">
                        <span style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px;">${otpCode}</span>
                    </div>
                </div>
                
                <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                    Este código é válido por 10 minutos. Se não solicitou este registo, pode ignorar este email.
                </p>
                
                <div style="background-color: #e3f2fd; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0;">
                    <p style="margin: 0; color: #555; font-size: 14px;">
                        <strong>Dica:</strong> Guarde este email até completar a verificação da sua conta.
                    </p>
                </div>
            </div>
            
            <div style="text-align: center; padding: 20px; border-top: 1px solid #eee; background-color: #f8f9fa;">
                <p style="color: #888; font-size: 14px; margin: 0;">
                    © 2024 nhonga.net - Plataforma de Oportunidades para Moçambique
                </p>
                <p style="color: #888; font-size: 12px; margin: 10px 0 0 0;">
                    Este é um email automático, não responda a esta mensagem.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const getPasswordResetEmailTemplate = (firstName, resetToken) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recuperar Palavra-passe - nhonga.net</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
            <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #007bff;">
                <h1 style="color: #007bff; margin: 0; font-size: 28px;">nhonga.net</h1>
                <p style="color: #666; margin: 5px 0 0 0;">Conectando Talentos em Moçambique</p>
            </div>
            
            <div style="padding: 30px 20px;">
                <h2 style="color: #333; margin-bottom: 20px;">Olá ${firstName}!</h2>
                
                <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
                    Recebemos uma solicitação para redefinir a sua palavra-passe. Use o código abaixo para criar uma nova palavra-passe:
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <div style="background-color: #f8f9fa; border: 2px dashed #007bff; border-radius: 8px; padding: 20px; display: inline-block;">
                        <span style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px;">${resetToken}</span>
                    </div>
                </div>
                
                <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                    Este código é válido por 10 minutos. Se não solicitou esta alteração, pode ignorar este email.
                </p>
                
                <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
                    <p style="margin: 0; color: #856404; font-size: 14px;">
                        <strong>Segurança:</strong> Nunca partilhe este código com ninguém.
                    </p>
                </div>
            </div>
            
            <div style="text-align: center; padding: 20px; border-top: 1px solid #eee; background-color: #f8f9fa;">
                <p style="color: #888; font-size: 14px; margin: 0;">
                    © 2024 nhonga.net - Plataforma de Oportunidades para Moçambique
                </p>
                <p style="color: #888; font-size: 12px; margin: 10px 0 0 0;">
                    Este é um email automático, não responda a esta mensagem.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};