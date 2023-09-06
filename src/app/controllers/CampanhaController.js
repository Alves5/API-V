import CampanhaRepository from "../repositories/CampanhaRepository.js";
import ContatoMongoRepository from "../repositories/ContatoMongoRepository.js";

class CampanhaController {
    async findAll(req, res){
        try {
            const result = await CampanhaRepository.findAll();
            (result !== null) ? res.json(result) : res.json({status: false, message: 'No documents found'});
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res){
        const campanha = req.body;
        try {
            await CampanhaRepository.create(campanha);
            res.json({status: true, message: 'Success'});
        }catch (e) {
            res.json(e);
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await CampanhaRepository.findByCodigo(codigo);
            (result !== null) ? res.json(result) : res.json({status: false, message: 'Document not found'});
        }catch (e) {
            res.json(e);
        }
    }

    async update(req, res){
        const codigo = req.params.codigo;
        const campanha = req.body;
        try {
            const result = await CampanhaRepository.update(codigo, campanha);
            if (result.modifiedCount === 1){
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await CampanhaRepository.delete(codigo);
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
export default new CampanhaController();