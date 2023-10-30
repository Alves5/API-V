import PropostaModel from "../model/Proposta.js"

class PropostaRepository {
    findAll(){
        return PropostaModel.find();
    }

    create(prop){
        const proposta = new PropostaModel(prop);
        proposta.save();
    }

    findByFilter(filter){
        return PropostaModel.findOne(filter);
    }

    update(filter, prop){
        return PropostaModel.updateOne(filter, {$set: prop}, {new: true});
    }

    delete(filter){
        return PropostaModel.deleteOne(filter, {new: true});
    }
}
export default new PropostaRepository();