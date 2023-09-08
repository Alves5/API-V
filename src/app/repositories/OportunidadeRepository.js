import mongoose from "mongoose";

class OportunidadeRepository {
    findAll(){
        const oportunidade= new mongoose.model('Oportunidade');
        return oportunidade.find();
    }

    create(opp){
        const oportunidade = new mongoose.model('Oportunidade')(opp);
        oportunidade.save();
    }

    findByNumero(numero){
        const oportunidade = new mongoose.model('Oportunidade');
        return oportunidade.findOne({numeroOportunidade: numero});
    }

    update(numero, opp){
        const oportunidade = new mongoose.model('Oportunidade');
        return oportunidade.updateOne({numeroOportunidade: numero}, {$set: opp}, {new: true});
    }

    delete(numero){
        const oportunidade = new mongoose.model('Oportunidade');
        return oportunidade.deleteOne({numeroOportunidade: numero}, {new: true});
    }
}
export default new OportunidadeRepository();