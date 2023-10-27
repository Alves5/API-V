import ContratoModel from "../model/Contrato.js";

class ContratoRepository {
    findAll(){
        return ContratoModel.find();
    }

    create(cont){
        const contrato = new ContratoModel(cont);
        contrato.save();
    }

    findByNumero(filter){
        return ContratoModel.findOne(filter);
    }

    update(filter, cont){
        return ContratoModel.updateOne(filter, {$set: cont}, {new: true});
    }

    delete(filter){
        return ContratoModel.deleteOne(filter, {new: true});
    }
}
export default new ContratoRepository();