import ContaRepository from "../repositories/ContaRepository.js";

class ContaController {
    async findAll(req, res){
        try {
            const result = await ContaRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const conta = req.body;
        const numero = req.body.numeroConta;
        try {
            const exists = await ContaRepository.findByNumero(numero);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await ContaRepository.create(conta);
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
        const numero = req.params.numeroConta;
        try {
            const result = await ContaRepository.findByNumero(numero);
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
        const numero = req.params.numeroConta;
        const conta = req.body;
        try {
            const result = await ContaRepository.update(numero, conta);
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
        const numero = req.params.numeroConta;
        try {
            const result = await ContaRepository.delete(numero);
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
export default new ContaController();