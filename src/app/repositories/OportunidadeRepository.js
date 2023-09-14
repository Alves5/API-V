import OportunidadeModel from "../model/Oportunidade.js"

class OportunidadeRepository {
    findAll(){
        return OportunidadeModel.find();
    }

    create(opp){
        const oportunidade = new OportunidadeModel(opp);
        oportunidade.save();
    }

    findByNumero(numero){
        return OportunidadeModel.findOne({numeroOportunidade: numero});
    }

    update(numero, opp){
        return OportunidadeModel.updateOne({numeroOportunidade: numero}, {$set: opp}, {new: true});
    }

    delete(numero){
        return OportunidadeModel.deleteOne({numeroOportunidade: numero}, {new: true});
    }
}
export default new OportunidadeRepository();