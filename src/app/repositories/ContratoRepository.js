import ContratoModel from "../model/Contrato.js";

class ContratoRepository {
    findAll(){
        return ContratoModel.find();
    }

    create(cont){
        const contrato = new ContratoModel(cont);
        contrato.save();
    }

    findByNumero(numero){
        return ContratoModel.findOne({numeroContrato: numero});
    }

    update(numero, cont){
        return ContratoModel.updateOne({numeroContrato: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        return ContratoModel.deleteOne({numeroContrato: numero}, {new: true});
    }
}
export default new ContratoRepository();