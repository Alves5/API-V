import ContratoModel from "../model/Contrato.js";
import LeadModel from "../model/Lead.js";

class ContratoRepository {
    findAll(){
        return ContratoModel.find();
    }

    create(cont){
        return new Promise((resolve, reject) => {
            const contrato = new ContratoModel(cont);
            contrato.save()
                .then((registroSalvo) => {
                    resolve(registroSalvo);
                })
                .catch((erro) => {
                    reject(erro);
                });
        });
    }

    findByFilter(filter){
        return ContratoModel.findOne(filter);
    }

    update(filter, cont){
        return ContratoModel.updateOne(filter, {$set: cont}, {new: true});
    }

    delete(filter){
        return ContratoModel.deleteOne(filter, {new: true});
    }
}
export default new ContratoRepository();