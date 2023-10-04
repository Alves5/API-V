import UsuarioRepository from "../repositories/UsuarioRepository.js";
import CryptoUtil from "../Utils/CryptoUtil.js";
import GenerateToken from "../Utils/GenerateToken.js";
import EmailService from "../Utils/EmailService.js";

class UsuarioController {
    async findAll(req, res){
        try {
            const result = await UsuarioRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum usuário encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Usuários encontrados com sucesso.'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const usuario = req.body;
        const username = req.body.username;
        try {
            const filter = {username: username};
            // Verificar se o usuário existe
            const exists = await UsuarioRepository.findByArgs(filter);
            if (exists){
                res.status(422).json({response: 0, message: "Usuário já existe."});
                return false;
            }

            try {
                usuario.token = [];
                const novoToken = {
                    text: GenerateToken.generateToken(12),
                    createdAt: new Date(),
                };
                usuario.token.push(novoToken);

                // Salva o usuário
                await UsuarioRepository.create(usuario);

                // Enviar email para ativar e criar senha
                let link = `http://localhost:3000/usuario/ativarUsuario/${usuario.token[0].text}`;
                EmailService.enviarEmail(
                    'Sua conta foi criada com sucesso!',
                    '<h4>Sua conta de usuário foi criada</h4></br>' +
                    '<p>Agora só é preciso ativar e criar uma senha, vamos lá e clique no link abaixo</p></br>' +
                    `<a href="${link}">${link}</a>`);
                res.status(201).json({response: 1, message: "Usuário criado com sucesso."});
            }catch (e) {
                res.status(500).json({response: 0, errors: e});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByUsername(req, res){
        const username = req.params.username;
        try {
            const filter = {username: username};
            const result = await UsuarioRepository.findByArgs(filter);
            if(result !== null){
                res.status(200).json({response: result, message: "Usuário encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum usuário encontrado."});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async updateByUsername(req, res){
        const username = req.params.username;
        const usuario = req.body;
        try {
            const result = await UsuarioRepository.update({username: username}, usuario);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, usuário atualizado.'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Usuário não atualizado.'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByUsername(req, res){
        const username = req.params.username;
        try {
            const result = await UsuarioRepository.delete(username);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Usuário deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Usuário não existe ou não deletado.'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async activateUserOrRecoverUser(req, res){
        const token = req.params.token;
        const {senha1, senha2} = req.body;
        try {
            if (senha1 === senha2){
                const passCrypto = CryptoUtil.criptografar(senha1);
                const result = await UsuarioRepository.searchTokenAndUpdatePassword(token, passCrypto);
                if(result === null){
                    res.status(404).json({response: 0, message: 'Token not found'});
                }else{
                    res.status(200).json({response: 1, message: 'Password created/updated'});
                }
            }else{
                throw new Error('Passwords are not the same');
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e.message});
        }
    }

    async recoverUser(req, res){
        const email = req.body.email;
        try {
            const filter = {email: email};
            // Verificar se o usuário existe
            const usuario = await UsuarioRepository.findByArgs(filter);
            if (usuario){
                try {
                    usuario.token = [];
                    const novoToken = {
                        text: GenerateToken.generateToken(18),
                        createdAt: new Date(),
                    };
                    usuario.token.push(novoToken);

                    await UsuarioRepository.update({email: email}, usuario);
                    // Enviar email para recuperar conta do usuário
                    let link = `http://localhost:3000/usuario/recuperarUsuario/${novoToken.text}`;
                    EmailService.enviarEmail(
                        'Recuperar conta',
                        '<h4>Foi feito um pedido para recuperar sua conta</h4></br>' +
                        '<p>Para recuperar a conta basta acessar o link e trocar sua senha</p></br>' +
                        `<a href="${link}">${link}</a>`);
                    res.status(200).json({response: 1, message: 'Sucesso, email enviado.'});
                }catch (e) {
                    res.status(500).json({response: 0, errors: e});
                }
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async PermissionsUser(req, res){
        const username = req.params.username;
        try {
            const user = await UsuarioRepository.findByArgs({username: username});
            const result = await UsuarioRepository.searchProfileAndPermissions(user.perfil_n);
            res.status(200).json({response: result.permissoes, message: 'Permissões encontradas.'});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async relatedList(req, res){
        const email = req.params.email;
        try {
            const result = await UsuarioRepository.searchRelatedList({criadoPor: email});
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

}
export default new UsuarioController();