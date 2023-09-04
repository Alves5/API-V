import connectionNosql from "../../config/database/connectionMongoDb.js";
import mongoose from "mongoose";

class ContatoMongoRepository {
    findAll(){
        const user = new mongoose.model('Contato');
        return user.find();
    }

    create(cont){
        const contato = new mongoose.model('Contato')(cont);
        contato.save();
    }

    findByNumero(numero){
        const contato = new mongoose.model('Contato');
        return contato.findOne({numero: numero});
    }

    update(numero, cont){
        const contato = new mongoose.model('Contato');
        return contato.updateOne({numero: numero}, {$set: cont}, {new: true});
    }

    delete(numero){
        const contato = new mongoose.model('Contato');
        return contato.deleteOne({numero: numero}, {new: true});
    }
}
export default new ContatoMongoRepository();