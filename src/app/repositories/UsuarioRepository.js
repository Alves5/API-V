import mongoose from "mongoose";

class UsuarioRepository {
    findAll(){
        const usuario= new mongoose.model('Usuario');
        return usuario.find();
    }

    create(user){
        const usuario = new mongoose.model('Usuario')(user);
        usuario.save();
    }

    findByUsername(username){
        const usuario = new mongoose.model('Usuario');
        return usuario.findOne({username: username});
    }

    update(username, user){
        const usuario = new mongoose.model('Usuario');
        return usuario.updateOne({username: username}, {$set: user}, {new: true});
    }

    delete(username){
        const usuario = new mongoose.model('Usuario');
        return usuario.deleteOne({username: username}, {new: true});
    }
}
export default new UsuarioRepository();