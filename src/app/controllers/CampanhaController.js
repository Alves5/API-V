import CampanhaRepository from "../repositories/CampanhaRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class CampanhaController {
    async findAll(req, res){
        try {
            const cachedData = meuCache.get("findAllCampanha");
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const result = await CampanhaRepository.findAll();
            if(Object.keys(result).length === 0){
               return res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }

            meuCache.set("findAllCampanha", JSON.stringify(result), 60);
            res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async store(req, res){
        try {
            // Apagar cache
            meuCache.del("findAllCampanha");

            const campanha = req.body;
            const exists = await CampanhaRepository.findByCodigo(campanha.codigo);
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await CampanhaRepository.create(campanha);
            res.status(201).json({response: 1, message: "Registro criado com sucesso."});
        }catch (e){
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await CampanhaRepository.findByCodigo(codigo);
            if(result === null){
                return res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }

            res.status(200).json({response: result, message: "Registro encontrado."});
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