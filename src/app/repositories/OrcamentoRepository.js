import OrcamentoModel from "../model/Orcamento.js";

class OrcamentoRepository {
    findAll(){
        return OrcamentoModel.find();
    }

    create(orc){
        const orcamento = new OrcamentoModel(orc);
        orcamento.save();
    }

    findByNumero(filter){
        return OrcamentoModel.findOne(filter);
    }

    update(filter, orc){
        return OrcamentoModel.updateOne(filter, {$set: orc}, {new: true});
    }

    delete(filter){
        return OrcamentoModel.deleteOne(filter, {new: true});
    }
}
export default new OrcamentoRepository();