import CryptoUtil from "../../Utils/CryptoUtil.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../../Utils/ApiMessages.js";
dotenv.config();

class LoginController {

    async login(req, res){
        try {
            const { email, senha } = req.body;

            // Verifique se o usuário com o e-mail fornecido existe no banco de dados
            const passCrypto = CryptoUtil.criptografar(senha);
            const user = await UsuarioRepository.searchUserLogin(email, passCrypto);

            if (!user) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: "Credenciais inválidas" });
            }

            // Gere um token JWT para o usuário autenticado
            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email,
                userSenha: user.senha
            }, process.env.KEY_TOKEN, { expiresIn: '1 day' });
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, token: token });
        } catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e });
        }
    }

}
export default new LoginController();