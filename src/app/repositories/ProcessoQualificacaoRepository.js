import EtapaModel from "../model/ProcessoQualificacao.js"

class ProcessoQualificacaoRepository {
    findAll(){
        return EtapaModel.find();
    }
    create(proc){
        const processo = new EtapaModel(proc);
        processo.save();
    }
    findByNome(filter){
        return EtapaModel.findOne(filter);
    }
    update(apiNome, processo){
        return EtapaModel.updateOne({apiNome: apiNome}, {$set: processo}, {new: true});
    }
    delete(apiNome){
        return EtapaModel.deleteOne({apiNome: apiNome});
    }
}
export default new ProcessoQualificacaoRepository();