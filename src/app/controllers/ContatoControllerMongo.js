import connectionNosql from "../../config/database/connectionMongoDb.js";
import mongoose from "mongoose";
import contatoSchema from "../../app/model/modelMongoDb/Contato.js";


class ContatoControllerMongo {

    async store(req, res) {
        const contato = new mongoose.model('Contato')(req.body);
        try {
            await contato.save();
            res.json({ message: 'Success' });
        }
        catch (e) {
            res.json(e);
        }
    }
}

export default new ContatoControllerMongo();
