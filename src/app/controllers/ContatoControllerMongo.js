import ContatoMongoRepository from "../repositories/ContatoMongoRepository.js";

class ContatoControllerMongo {
    async findAll(req, res){
        try {
            const result = await ContatoMongoRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const contato = req.body;
        try {
            await ContatoMongoRepository.create(contato);
            res.json({status: true, message: 'Success'});
        }catch (e) {
            res.json(e);
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numero;
        try {
            const result = await ContatoMongoRepository.findByNumero(numero);
            if (result !== null){
                res.json(result);
            }else{
                res.json({status: false, message: 'Document not found'});
            }
        }catch (e) {
            res.json(e);
        }
    }
    
    async updateByNumero(req, res){
        const numero = req.params.numero;
        const contato = req.body;
        try {
            const result = await ContatoMongoRepository.update(numero, contato);
            if (result.modifiedCount === 1){
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByNumero(req, res){
        const numero = req.params.numero;
        try {
            const exists = await ContatoMongoRepository.findByNumero(numero);
            if (exists === null){
                res.json({status: false, message: 'Document not found'});
            }else{
                try {
                    await ContatoMongoRepository.delete(numero);
                    res.json({status: true, message: 'Success. Deleted document'})
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

}

export default new ContatoControllerMongo();
