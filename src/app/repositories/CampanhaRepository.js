import CampanhaModel from "../model/Campanha.js";

class CampanhaRepository {
    findAll(){
        return CampanhaModel.find();
    }
    create(camp){
        const campanha = new CampanhaModel(camp);
        campanha.save();
    }
    findByCodigo(codigo){
        return CampanhaModel.findOne({codigo: codigo});
    }
    update(codigo, camp){
        return CampanhaModel.updateOne({codigo: codigo}, {$set: camp}, {new: true});
    }
    delete(codigo){
        return CampanhaModel.deleteOne({});
    }
}
export default new CampanhaRepository();