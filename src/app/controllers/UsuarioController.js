import UsuarioRepository from "../repositories/UsuarioRepository.js";
import Usuario from "../model/Usuario.js";
import GenerateToken from "../Utils/GenerateToken.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";
import CryptoUtil from "../Utils/CryptoUtil.js";
import EmailService from "../Utils/EmailService.js";

class UsuarioController{
    async findAll(request, response){
        try {
            const result = await UsuarioRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const email = request.body.email;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if (Object.keys(exists).length != 0){
                response.json({status: 200, message: 'User already exists'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const token = GenerateToken.generateToken(25);
                    const usuario = new Usuario(
                        null,
                        request.body.email,
                        null,
                        request.body.perfil,
                        request.body.nome,
                        formattedDateTime,
                        token,
                        formattedDateTime,
                        request.body.criado_por,
                        "",
                        null
                    );
                    await UsuarioRepository.create(usuario);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByEmail(request, response){
        const email = request.params.email;
        try {
            const result = await UsuarioRepository.findByEmail(email);
            Object.keys(result).length == 0 ? response.json({message: 'ID not found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateByEmail(request, response){
        const email = request.body.email;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if (Object.keys(exists).length == 0){
                response.json({message: 'E-mail not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const usuario = new Usuario(
                        null,
                        null,
                        request.body.senha,
                        request.body.perfil,
                        request.body.nome,
                        formattedDateTime,
                        null,
                        null,
                        null,
                        request.body.atualizado_por,
                        null
                    );
                    await UsuarioRepository.update(usuario, email);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteByEmail(request, response){
        const email = request.params.email;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if(Object.keys(exists).length == 0){
                response.json({message: 'Email not found'});
            }else{
                await UsuarioRepository.delete(email);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    async login(request, response){
        const {email, senha} = request.body;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if (Object.keys(exists).length == 0){
                response.json({message: 'E-mail ou senha incorretos!'});
            }else{
                const senhaCript = CryptoUtil.criptografar(senha);
                const result = await UsuarioRepository.login(email, senhaCript);
                if (Object.keys(result).length == 0){
                    response.json({message: 'E-mail ou senha incorretos!'});
                }else{
                    response.json({message: 'Bem-vindo!'})
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    // Função para guardar o token de recuperação de conta e enviar email para o usuário
    async retrieveAccount(request, response){
        const email = request.body.email;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if(Object.keys(exists).length == 0){
                response.json({status: 200, message: 'E-mail sent'});
            }else{
                const token = GenerateToken.generateToken(16);
                const formattedDateTime = FormattedDateTime.formatted();
                const usuario = new Usuario(null,null,null,null,null,null,token,null,null,null, formattedDateTime);
                await UsuarioRepository.createRememberToken(usuario, email);
                // Aqui o código para enviar o email para o usuário
                response.json({status: 200, message: 'E-mail sent'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    // Função para ativar a conta do usuário e definir uma senha
    async activateAccount(request, response){
        const {pass1, pass2, token} = request.body;
        try {
            const exists = await UsuarioRepository.validateToken(token);
            if (Object.keys(exists).length == 0){
                response.json({status: 404, message: 'Token not found or invalid '});
            }else{
                try {
                    if (pass1 !== pass2){
                        response.json({message: 'The passwords are not the same'});
                        return;
                    }
                    const passCrypto = CryptoUtil.criptografar(pass1);
                    await UsuarioRepository.createNewPassword(passCrypto, token);
                    if (token.length > 16){
                        response.json({status: 200, message: 'Account successfully activated'});
                    }else{
                        response.json({status: 200, message: 'Password changed successfully'});
                    }
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async updateNome(request, response){
        const {email, nome} = request.body;
        try {
            const exists = await UsuarioRepository.findByEmail(email);
            if (Object.keys(exists).length == 0){
                response.json({message: 'E-mail not found'});
            }else{
                const formattedDateTime = FormattedDateTime.formatted();
                await UsuarioRepository.updateNome(nome,formattedDateTime, email);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findRelatedList(request, response){
        const email = request.params.email;
        try {
            const result = await UsuarioRepository.findRelatedList(email);
            Object.keys(result).length == 0 ? response.json({status: 404, message: 'No record found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

     async testeEmail(request, response){
         try {
             await EmailService.enviarEmail();
             response.json({message: 'Success'});
         }catch (e) {
             response.json(e);
         }
    }
}
export default new UsuarioController();