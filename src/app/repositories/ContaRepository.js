import mongoose from "mongoose";

class ContaRepository {
    findAll(){
        const conta= new mongoose.model('Conta');
        return conta.find();
    }

    create(cont){
        const conta = new mongoose.model('Conta')(cont);
        conta.save();
    }

    findByNumero(numero){
        const conta = new mongoose.model('Conta');
        return conta.findOne({numeroConta: numero});
    }

    update(numero, cont){
        const conta = new mongoose.model('Conta');
        return conta.updateOne({numeroConta: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        const conta = new mongoose.model('Conta');
        return conta.deleteOne({numeroConta: numero}, {new: true});
    }
}
export default new ContaRepository();