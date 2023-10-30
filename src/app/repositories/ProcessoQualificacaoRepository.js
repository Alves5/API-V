import EtapaModel from "../model/ProcessoQualificacao.js"

class ProcessoQualificacaoRepository {
    findAll(){
        return EtapaModel.find();
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