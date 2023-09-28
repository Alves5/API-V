import PropostaModel from "../model/Proposta.js"

class PropostaRepository {
    findAll(){
        return PropostaModel.find();
    }

    create(prop){
        const proposta = new PropostaModel(prop);
        proposta.save();
    }

    findByNumero(numero){
        return PropostaModel.findOne({numeroProposta: numero});
    }

    update(numero, prop){
        return PropostaModel.updateOne({numeroProposta: numero}, {$set: prop}, {new: true});
    }

    delete(numero){
        return PropostaModel.deleteOne({numeroProposta: numero}, {new: true});
    }
}
export default new PropostaRepository();