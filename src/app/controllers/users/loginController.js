import CryptoUtil from "../../Utils/CryptoUtil.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

class LoginController {

    async login(req, res){
        try {
            const { email, senha } = req.body;

            // Verifique se o usuário com o e-mail fornecido existe no banco de dados
            const passCrypto = CryptoUtil.criptografar(senha);
            const user = await UsuarioRepository.searchUserLogin(email, passCrypto);

            if (!user) {
                return res.status(401).json({ response: 0, message: "Credenciais inválidas" });
            }

            // Gere um token JWT para o usuário autenticado
            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email,
                userSenha: user.senha
            }, process.env.KEY_TOKEN, { expiresIn: "1h" });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }

}
export default new LoginController();