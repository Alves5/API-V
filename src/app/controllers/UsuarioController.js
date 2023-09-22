import UsuarioRepository from "../repositories/UsuarioRepository.js";
import CryptoUtil from "../Utils/CryptoUtil.js";
import GenerateToken from "../Utils/GenerateToken.js";
import EmailService from "../Utils/EmailService.js";

class UsuarioController {
    async findAll(req, res){
        try {
            const result = await UsuarioRepository.findAll();
            res.json(result);
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
                res.json({status: false, message:'This user already exists'});
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
                res.json({status: true, message: 'Success'});
            }catch (e) {
                res.json(e);
            }
        }catch (e) {
            res.json(e);
        }
    }

    async findByUsername(req, res){
        const username = req.params.username;
        try {
            const filter = {username: username};
            const result = await UsuarioRepository.findByArgs(filter);
            if (result !== null){
                res.json(result);
            }else{
                res.json({status: false, message: 'Document not found'});
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
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
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
                res.json({status: true, message: 'Success. Deleted document'})
            }else{
                res.json({status: false, message: 'Document not found or not deleted'});
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
                (result === null) ? res.json({status: false, message: 'Token not found'})  : res.json({status: true, message: 'Password created/updated'});
            }else{
                throw new Error('Passwords are not the same');
            }
        }catch (e) {
            res.json({status: false, message: e.message});
        }
    }

    async userLogin(req, res){
        const {email, senha} = req.body;
        try {
            const passCrypto = CryptoUtil.criptografar(senha);
            const user = await UsuarioRepository.searchUserLogin(email, passCrypto);
            let verifiedToken = null;
            if (!user){
                res.json({status: false, token: verifiedToken});
            }else{
                verifiedToken = GenerateToken.generateToken(18);
                res.json({status: true, token: verifiedToken});
            }
        }catch (e) {
            res.json({status: false, message: e.message});
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
                    res.json({status: true, message: 'Success, send email'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async PermissionsUser(req, res){
        const username = req.params.username;
        try {
            const user = await UsuarioRepository.findByArgs({username: username});
            const result = await UsuarioRepository.searchProfileAndPermissions(user.perfil_n);
            res.json(result.permissoes);
        }catch (e) {
            res.json(e);
        }
    }

    async relatedList(req, res){
        const email = req.params.email;
        try {
            const result = await UsuarioRepository.searchRelatedList({criadoPor: email});
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

}
export default new UsuarioController();