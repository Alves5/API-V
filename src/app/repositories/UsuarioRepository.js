import UsuarioModel from "../model/Usuario.js";

class UsuarioRepository {
    findAll(){
        return UsuarioModel.find();
    }

    create(user){
        const usuario = new UsuarioModel(user);
        usuario.save();
    }

    findByUsername(username){
        return UsuarioModel.findOne({username: username});
    }

    update(username, user){
        return UsuarioModel.updateOne({username: username}, {$set: user}, {new: true});
    }

    delete(username){
        return UsuarioModel.deleteOne({username: username}, {new: true});
    }

    updatePassword(username, password){
        return UsuarioModel.findOneAndUpdate({username: username},{senha: password}, {new: true});
    }
}
export default new UsuarioRepository();