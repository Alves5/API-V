import ContaRepository from "../repositories/ContaRepository.js";
import {HTTP_STATUS, RESPONSE, MESSAGES} from "../Utils/ApiMessages.js";
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class ContaController {
    async findAll(req, res){
        try {
            const cachedData = meuCache.get("findAllConta");
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const result = await ContaRepository.findAll();
            if(Object.keys(result).length === 0){
                return res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }

            meuCache.set("findAllConta", JSON.stringify(result), 60);
            res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async store(req, res) {
        try {
            // Apagar cache
            meuCache.del("findAllConta");

            const conta = req.body;
            const exists = await ContaRepository.findByNumero(conta.numeroConta);
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await ContaRepository.create(conta);
            res.status(201).json({response: 1, message: "Registro criado com sucesso."});
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numeroConta;
        try {
            const result = await ContaRepository.findByNumero(numero);
            if (result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async updateByNumero(req, res){
        const numero = req.params.numeroConta;
        const conta = req.body;
        try {
            const result = await ContaRepository.update(numero, conta);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
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
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new ContaController();