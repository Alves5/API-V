import OportunidadeModel from "../model/Oportunidade.js"

class OportunidadeRepository {
    findAll(){
        return OportunidadeModel.find();
    }

    create(opp){
        const oportunidade = new OportunidadeModel(opp);
        oportunidade.save();
    }

    findByNumero(filter){
        return OportunidadeModel.findOne(filter);
    }

    update(filter, opp){
        return OportunidadeModel.updateOne(filter, {$set: opp}, {new: true});
    }

    delete(numero){
        return OportunidadeModel.deleteOne(filter, {new: true});
    }
}
export default new OportunidadeRepository();