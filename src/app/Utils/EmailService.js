import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
class EmailService {
    enviarEmail(subject, html) {
        // Configurações de transporte para o servidor SMTP
        let transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Configurações do email
        let mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: subject,
            html: html
        };

        // Enviar email
        transport.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('Erro ao enviar o email: ' + error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
}
export default new EmailService();
