import ContatoModel from "../model/Contato.js";
import ContratoModel from "../model/Contrato.js"

class ContatoRepository {

    findAll(){
        return ContatoModel.find();
    }

    create(cont){
        const contato = new ContatoModel(cont);
        contato.save();
    }

    findByNumero(numero){
        return ContatoModel.findOne({numero: numero});
    }

    update(numero, cont){
        return ContatoModel.updateOne({numero: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        return ContatoModel.deleteOne({numero: numero}, {new: true});
    }

    searchRelatedList(numero){
        return ContratoModel.find({numeroContato_n: numero}).sort({createdAt: -1});
    }
}
export default new ContatoRepository();