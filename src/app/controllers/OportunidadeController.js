import OportunidadeRepository from "../repositories/OportunidadeRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class OportunidadeController {
    async findAll(req, res){
        try {
            const cachedData = meuCache.get("findAllOportunidade");
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const result = await OportunidadeRepository.findAll();
            if(Object.keys(result).length === 0){
                return res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }

            meuCache.set("findAllOportunidade", JSON.stringify(result), 60);
            res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async store(req, res) {
        try {
            // Apagar cache
            meuCache.del("findAllOportunidade");

            const oportunidade = req.body;
            const exists = await OportunidadeRepository.findByNumero(oportunidade.numeroOportunidade);
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await OportunidadeRepository.create(oportunidade);
            res.status(201).json({response: 1, message: "Registro criado com sucesso."});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.findByNumero(numero);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async updateByNumero(req, res){
        const numero = req.params.numeroOportunidade;
        const oportunidade = req.body;
        try {
            const result = await OportunidadeRepository.update(numero, oportunidade);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async deleteByNumero(req, res){
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.delete(numero);
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
export default new OportunidadeController();