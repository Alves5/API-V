import UsuarioModel from "../model/Usuario.js";
import usuarioModel from "../model/Usuario.js";

class UsuarioRepository {
    findAll(){
        return UsuarioModel.find();
    }

    create(user){
        const usuario = new UsuarioModel(user);
        usuario.save();
    }

    findByArgs(filter){
        return UsuarioModel.findOne(filter);
    }

    update(filter, set){
        return UsuarioModel.updateOne(filter, {$set: set}, {new: true});
    }

    delete(username){
        return UsuarioModel.deleteOne({username: username}, {new: true});
    }

    searchTokenAndUpdatePassword(token, senha){
        return UsuarioModel.findOneAndUpdate({"token.text": token}, {senha: senha, "token.$[].text": null, "token.$[].createdAt": null},{new: true});
    }

    searchUserLogin(email, senha){
        return UsuarioModel.findOne({email: email, senha: senha});
    }

}
export default new UsuarioRepository();