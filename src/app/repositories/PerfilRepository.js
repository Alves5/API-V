import PerfilModel from "../model/Perfil.js";
class PerfilRepository {
    findAll(){
        return PerfilModel.find();
    }
    create(per){
        const perfil = new PerfilModel(per);
        perfil.save();
    }
    findByfilter(filter){
        return PerfilModel.findOne(filter);
    }
    update(filter, per){
        return PerfilModel.updateOne(filter, {$set: per}, {new: true});
    }
    delete(filter){
        return PerfilModel.deleteOne(filter);
    }
}
export default new PerfilRepository();