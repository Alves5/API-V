import ContatoModel from "../model/Contato.js"

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
}
export default new ContatoRepository();