import nodemailer from "nodemailer";
class EmailService {
    enviarEmail(subject, html) {
        // Configurações de transporte para o servidor SMTP
        let transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "a7a0a1578bf229",
                pass: "9a0478865f64b6"
            }
        });

        // Configurações do email
        let mailOptions = {
            from: 'danielalves.jittechnology@gmail.com',
            to: 'dtest.treinamentos@gmail.com',
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
