import ContatoMongoRepository from "../repositories/ContatoMongoRepository.js";

class ContatoControllerMongo {

    async store(req, res) {
        const contato = req.body;
        try {
            await ContatoMongoRepository.create(contato);
            res.json({ message: 'Success' });
        }
        catch (e) {
            res.json(e);
        }
    }
}

export default new ContatoControllerMongo();
