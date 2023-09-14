import ContaModel from "../model/Conta.js"

class ContaRepository {
    findAll(){
        return ContaModel.find();
    }

    create(cont){
        const conta = new ContaModel(cont);
        conta.save();
    }

    findByNumero(numero){
        return ContaModel.findOne({numeroConta: numero});
    }

    update(numero, cont){
        return ContaModel.updateOne({numeroConta: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        return ContaModel.deleteOne({numeroConta: numero}, {new: true});
    }
}
export default new ContaRepository();