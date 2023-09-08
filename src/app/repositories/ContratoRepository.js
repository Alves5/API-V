import mongoose from "mongoose";

class ContratoRepository {
    findAll(){
        const contrato= new mongoose.model('Contrato');
        return contrato.find();
    }

    create(cont){
        const contrato = new mongoose.model('Contrato')(cont);
        contrato.save();
    }

    findByNumero(numero){
        const contrato = new mongoose.model('Contrato');
        return contrato.findOne({numeroContrato: numero});
    }

    update(numero, cont){
        const contrato = new mongoose.model('Contrato');
        return contrato.updateOne({numeroContrato: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        const contrato = new mongoose.model('Contrato');
        return contrato.deleteOne({numeroContrato: numero}, {new: true});
    }
}
export default new ContratoRepository();