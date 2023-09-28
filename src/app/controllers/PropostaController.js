import PropostaRepository from "../repositories/PropostaRepository.js";

class PropostaController {
    async findAll(req, res){
        try {
            const result = await PropostaRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const proposta = req.body;
        const numero = req.body.numeroProposta;
        try {
            const exists = await PropostaRepository.findByNumero(numero);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await PropostaRepository.create(proposta);
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
        const numero = req.params.numeroProposta;
        try {
            const result = await PropostaRepository.findByNumero(numero);
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
        const numero = req.params.numeroProposta;
        const proposta = req.body;
        try {
            const result = await PropostaRepository.update(numero, proposta);
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
        const numero = req.params.numeroProposta;
        try {
            const result = await PropostaRepository.delete(numero);
            if (result.deletedCount === 1){
                res.json({status: true, message: 'Success. Deleted document'})
            }else{
                res.json({status: false, message: 'Document not found or not deleted'});
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new PropostaController();