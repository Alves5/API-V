import PerfilModel from "../model/Perfil.js";
class PerfilRepository {
    findAll(){
        return PerfilModel.find();
    }
    create(per){
        const perfil = new PerfilModel(per);
        perfil.save();
    }
    findByNome(nome){
        return PerfilModel.findOne({nome: nome});
    }
    update(nome, per){
        return PerfilModel.updateOne({nome: nome}, {$set: per}, {new: true});
    }
    delete(nome){
        return PerfilModel.deleteOne({nome: nome});
    }
}
export default new PerfilRepository();