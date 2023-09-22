import ContatoRepository from "../repositories/ContatoRepository.js";

class ContatoController {
    async findAll(req, res){
        try {
            const result = await ContatoRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const contato = req.body;
        const numero = req.body.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numero);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await ContatoRepository.create(contato);
                    res.json({status: true, message: 'Success'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numero;
        try {
            const result = await ContatoRepository.findByNumero(numero);
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
            const result = await ContatoRepository.update(numero, contato);
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
            const result = await ContatoRepository.delete(numero);
            if (result.deletedCount === 1){
                res.json({status: true, message: 'Success. Deleted document'})
            }else{
                res.json({status: false, message: 'Document not found or not deleted'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async relatedList(req, res){
        const numeroContato = req.params.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numeroContato);
            if (!exists){
                res.json({status: false, message: 'Document not found'});
                return false;
            }

            const result = await ContatoRepository.searchRelatedList(numeroContato);
            if (Object.keys(result).length !== 0){
                res.json(result);
            }else{
                res.json({status: false, message: 'No records found'});
            }
        }catch (e) {
            res.json(e);
        }
    }

}

export default new ContatoController();
