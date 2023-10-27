import ContaModel from "../model/Conta.js"

class ContaRepository {
    findAll(){
        return ContaModel.find();
    }

    create(cont){
        const conta = new ContaModel(cont);
        conta.save();
    }

    findByNumero(filter){
        return ContaModel.findOne(filter);
    }

    update(filter, cont){
        return ContaModel.updateOne(filter, {$set: cont}, {new: true});
    }

    delete(filter){
        return ContaModel.deleteOne(filter, {new: true});
    }
}
export default new ContaRepository();