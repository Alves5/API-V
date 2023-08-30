import connectionNosql from "../../config/database/connectionMongoDb.js";
import mongoose from "mongoose";

class ContatoMongoRepository {
    create(cont){
        const contato = new mongoose.model('Contato')(cont);
        contato.save();
    }
}
export default new ContatoMongoRepository();