import EtapaModel from "../model/ProcessoQualificacao.js"

class ProcessoQualificacaoRepository {
    findAll(filter1, filter2){
        return EtapaModel.find(filter1, filter2);
    }
    create(proc){
        const processo = new EtapaModel(proc);
        processo.save();
    }
    findByFilter(filter){
        return EtapaModel.findOne(filter);
    }
    update(filter, processo){
        return EtapaModel.updateOne(filter, {$set: processo}, {new: true});
    }
    delete(filter){
        return EtapaModel.deleteOne(filter);
    }
}
export default new ProcessoQualificacaoRepository();