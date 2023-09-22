import OrcamentoRepository from "../repositories/OrcamentoRepository.js";

class OrcamentoController {
    async findAll(req, res){
        try {
            const result = await OrcamentoRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const orcamento = req.body;
        const numero = req.body.numeroOrcamento;
        try {
            const exists = await OrcamentoRepository.findByNumero(numero);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await OrcamentoRepository.create(orcamento);
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
        const numero = req.params.numeroOrcamento;
        try {
            const result = await OrcamentoRepository.findByNumero(numero);
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
        const numero = req.params.numeroOrcamento;
        const orcamento = req.body;
        try {
            const result = await OrcamentoRepository.update(numero, orcamento);
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
        const numero = req.params.numeroOrcamento;
        try {
            const result = await OrcamentoRepository.delete(numero);
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
export default new OrcamentoController();