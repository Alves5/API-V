import CampanhaModel from "../model/Campanha.js";

class CampanhaRepository {
    findAll(){
        return CampanhaModel.find();
    }
    create(camp){
        const campanha = new CampanhaModel(camp);
        campanha.save();
    }
    findByCodigo(filter){
        return CampanhaModel.findOne(filter);
    }
    update(filter, camp){
        return CampanhaModel.updateOne(filter, {$set: camp}, {new: true});
    }
    delete(filter){
        return CampanhaModel.deleteOne(filter);
    }
}
export default new CampanhaRepository();