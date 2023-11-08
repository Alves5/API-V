import UsuarioRepository from "../repositories/UsuarioRepository.js";
import CryptoUtil from "../Utils/CryptoUtil.js";
import GenerateToken from "../Utils/GenerateToken.js";
import EmailService from "../Utils/EmailService.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
import dotenv from 'dotenv';
dotenv.config();
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class UsuarioController {
    async findAll(req, res){
        try {
            const cachedData = meuCache.get("findAllUsuario");
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const result = await UsuarioRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(HTTP_STATUS.OK).json({response: 0, message: 'Nenhum usuário encontrado.'});
            }

            meuCache.set("findAllUsuario", JSON.stringify(result), 60);
            res.status(HTTP_STATUS.OK).json({response: result, message: 'Usuários encontrados com sucesso.'});
        }catch (e) {
            console.error('Erro ao buscar os registros:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async store(req, res) {
        try {
            const usuario = req.body;
            if (Object.keys(usuario).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            // Verificar se o usuário existe
            const exists = await UsuarioRepository.findByArgs({username: usuario.username});
            if (exists){
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({response: 0, message: "Usuário já existe."});
            }

            usuario.token = [];
            const novoToken = {
                text: GenerateToken.generateToken(12),
                createdAt: new Date(),
            };
            usuario.token.push(novoToken);

            // Salva o usuário
            await UsuarioRepository.create(usuario);

            // Enviar email para ativar e criar senha
            let link = `${process.env.BASE_URL_LOCALHOST}/usuario/ativarUsuario/${usuario.token[0].text}`;
            EmailService.enviarEmail(
                'Sua conta foi criada com sucesso!',
                '<h4>Sua conta de usuário foi criada</h4></br>' +
                '<p>Agora só é preciso ativar e criar uma senha, vamos lá e clique no link abaixo</p></br>' +
                `<a href="${link}">${link}</a>`);

            res.status(HTTP_STATUS.CREATED).json({response: 1, message: "Usuário criado com sucesso."});
            // Apagar cache
            meuCache.del(["findAllUsuario", "relatedListUsuario"]);
        }catch (e) {
            console.error('Erro ao criar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async findByUsername(req, res){
        try {
            const username = req.params.username;
            const filter = {username: username};

            const result = await UsuarioRepository.findByArgs(filter);
            if(result === null){
                return res.status(HTTP_STATUS.OK).json({response: 0, message: "Nenhum usuário encontrado."});
            }

            res.status(HTTP_STATUS.OK).json({response: result, message: "Usuário encontrado."});
        }catch (e) {
            console.error('Erro ao buscar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async updateByUsername(req, res){
        try {
            const username = req.params.username;
            const usuario = req.body;
            if (Object.keys(usuario).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const result = await UsuarioRepository.update({username: username}, usuario);
            if (result.modifiedCount === 0){
                return res.status(HTTP_STATUS.OK).json({response: result.modifiedCount, message: 'Usuário não atualizado.'});
            }

            res.status(HTTP_STATUS.OK).json({response: result.modifiedCount, message: 'Sucesso, usuário atualizado.'});
            // Apagar cache
            meuCache.del(["findAllUsuario", "relatedListUsuario"]);
        }catch (e) {
            console.error('Erro ao atualizar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async deleteByUsername(req, res){
        try {
            const username = req.params.username;

            /** @type {Object} */
            const result = await UsuarioRepository.delete(username);
            if (result.deletedCount === 0){
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: result.deletedCount, message: 'Usuário não existe ou não deletado.'});
            }

            res.status(HTTP_STATUS.OK).json({response: result.deletedCount, message: 'Usuário deletado com sucesso'});
            // Apagar cache
            meuCache.del(["findAllUsuario", "relatedListUsuario"]);
        }catch (e) {
            console.error('Erro ao deletar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async activateUserOrRecoverUser(req, res){
        try {
            const token = req.params.token;


            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const {senha1, senha2} = req.body;
            if (senha1 !== senha2){
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({response: RESPONSE.WARNING, message: 'As senhas não são compativeis, verifique novamente.'});
            }

            const passCrypto = CryptoUtil.criptografar(senha1);
            const result = await UsuarioRepository.searchTokenAndUpdatePassword(token, passCrypto);
            if(result === null){
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Token not found'});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Password created/updated'});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async recoverUser(req, res){
        const email = req.body.email;
        try {
            const filter = {email: email};
            // Verificar se o usuário existe
            const usuario = await UsuarioRepository.findByArgs(filter);
            if (!usuario){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: "Usuário não existe."});
            }

            usuario.token = [];
            const novoToken = {
                text: GenerateToken.generateToken(18),
                createdAt: new Date(),
            };
            usuario.token.push(novoToken);

            await UsuarioRepository.update({email: email}, usuario);

            // Enviar email para recuperar conta do usuário
            let link = `${process.env.BASE_URL_LOCALHOST}/usuario/recuperarUsuario/${novoToken.text}`;
            EmailService.enviarEmail(
                'Recuperar conta',
                '<h4>Foi feito um pedido para recuperar sua conta</h4></br>' +
                '<p>Para recuperar a conta basta acessar o link e trocar sua senha</p></br>' +
                `<a href="${link}">${link}</a>`);

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Sucesso, email enviado.'});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async PermissionsUser(req, res){
        const username = req.params.username;
        try {
            const user = await UsuarioRepository.findByArgs({username: username});
            const result = await UsuarioRepository.searchProfileAndPermissions(user.perfil_n);
            res.status(HTTP_STATUS.OK).json({response: result.permissoes, message: 'Permissões encontradas.'});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async relatedList(req, res){
        try {
            const cachedData = meuCache.get("relatedListUsuario");
            if (cachedData !== undefined){
                return res.status(HTTP_STATUS.OK).json({response: JSON.parse(cachedData), message: MESSAGES.FIND});
            }

            const email = req.params.email;
            const result = await UsuarioRepository.searchRelatedList({criadoPor: email});
            if(Object.keys(result).length === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            meuCache.set("relatedListUsuario", JSON.stringify(result), 60);
            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

}
export default new UsuarioController();