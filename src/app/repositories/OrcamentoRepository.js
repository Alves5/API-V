import mongoose from "mongoose";

class OrcamentoRepository {
    findAll(){
        const orcamento= new mongoose.model('Orcamento');
        return orcamento.find();
    }

    create(orc){
        const orcamento = new mongoose.model('Orcamento')(orc);
        orcamento.save();
    }

    findByNumero(numero){
        const orcamento = new mongoose.model('Orcamento');
        return orcamento.findOne({numeroOrcamento: numero});
    }

    update(numero, orc){
        const orcamento = new mongoose.model('Orcamento');
        return orcamento.updateOne({numeroOrcamento: numero}, {$set: orc}, {new: true});
    }

    delete(numero){
        const orcamento = new mongoose.model('Orcamento');
        return orcamento.deleteOne({numeroOrcamento: numero}, {new: true});
    }
}
export default new OrcamentoRepository();