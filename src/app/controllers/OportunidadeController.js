import OportunidadeRepository from "../repositories/OportunidadeRepository.js";

class OportunidadeController {
    async findAll(req, res){
        try {
            const result = await OportunidadeRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const oportunidade = req.body;
        const numero = req.body.numeroOportunidade;
        try {
            const exists = await OportunidadeRepository.findByNumero(numero);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await OportunidadeRepository.create(oportunidade);
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
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.findByNumero(numero);
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
        const numero = req.params.numeroOportunidade;
        const oportunidade = req.body;
        try {
            const result = await OportunidadeRepository.update(numero, oportunidade);
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
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.delete(numero);
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
export default new OportunidadeController();