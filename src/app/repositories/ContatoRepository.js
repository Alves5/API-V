import ContatoModel from "../model/Contato.js";
import ContratoModel from "../model/Contrato.js"

class ContatoRepository {

    findAll(){
        return ContatoModel.find().limit(30);
    }

    create(cont){
        const contato = new ContatoModel(cont);
        contato.save();
    }

    findByFilter(filter){
        return ContatoModel.findOne(filter);
    }

    update(id, cont){
        return ContatoModel.updateOne({_id: id}, {$set: cont}, {new: true});
    }

    delete(id){
        return ContatoModel.deleteOne({_id: id}, {new: true});
    }

    searchRelatedList(codigo){
        return ContratoModel.find({codigoContato_n: codigo}).sort({createdAt: -1});
    }
}
export default new ContatoRepository();