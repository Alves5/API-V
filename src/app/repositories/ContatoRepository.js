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

    findByCodigo(codigo){
        return ContatoModel.findOne({codigo: codigo});
    }

    update(codigo, cont){
        return ContatoModel.updateOne({codigo: codigo}, {$set: cont}, {new: true});
    }

    delete(codigo){
        return ContatoModel.deleteOne({codigo: codigo}, {new: true});
    }

    searchRelatedList(codigo){
        return ContratoModel.find({codigoContato_n: codigo}).sort({createdAt: -1});
    }
}
export default new ContatoRepository();