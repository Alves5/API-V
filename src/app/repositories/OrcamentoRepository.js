import OrcamentoModel from "../model/Orcamento.js";

class OrcamentoRepository {
    findAll(){
        return OrcamentoModel.find();
    }

    create(orc){
        const orcamento = new OrcamentoModel(orc);
        orcamento.save();
    }

    findByNumero(numero){
        return OrcamentoModel.findOne({numeroOrcamento: numero});
    }

    update(numero, orc){
        return OrcamentoModel.updateOne({numeroOrcamento: numero}, {$set: orc}, {new: true});
    }

    delete(numero){
        return OrcamentoModel.deleteOne({numeroOrcamento: numero}, {new: true});
    }
}
export default new OrcamentoRepository();