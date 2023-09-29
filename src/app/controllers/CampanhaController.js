import CampanhaRepository from "../repositories/CampanhaRepository.js";
import ContatoMongoRepository from "../repositories/ContatoRepository.js";

class CampanhaController {
    async findAll(req, res){
        try {
            const result = await CampanhaRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async store(req, res){
        const campanha = req.body;
        const codigo = req.body.codigo;
        try {
            const exists = await CampanhaRepository.findByCodigo(codigo);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await CampanhaRepository.create(campanha);
                    res.status(201).json({response: 1, message: "Registro criado com sucesso."});
                }catch (e) {
                    res.status(500).json({response: 0, errors: e});
                }
            }
        }catch (e){
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await CampanhaRepository.findByCodigo(codigo);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async update(req, res){
        const codigo = req.params.codigo;
        const campanha = req.body;
        try {
            const result = await CampanhaRepository.update(codigo, campanha);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await CampanhaRepository.delete(codigo);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }
}
export default new CampanhaController();