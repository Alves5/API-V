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
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            meuCache.set("findAllConta", JSON.stringify(result), 60);
            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            console.error('Erro ao buscar os registros:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async store(req, res) {
        try {
            const conta = req.body;
            if (Object.keys(conta).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await ContaRepository.findByNumero({numeroConta: conta.numeroConta});
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await ContaRepository.create(conta);
            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: MESSAGES.CREATED});
            // Apagar cache
            meuCache.del("findAllConta");
        }catch (e) {
            console.error('Erro ao criar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async findByNumero(req, res){
        try {
            const id = req.params.id;
            const result = await ContaRepository.findByNumero({_id: id});
            if (result === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND_ONE});
        }catch (e) {
            console.error('Erro ao buscar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async updateByNumero(req, res){
        try {
            const id = req.params.id;
            const conta = req.body;
            if (Object.keys(conta).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const result = await ContaRepository.update({_id: id}, conta);
            if (result.modifiedCount === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});

            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            // Apagar cache
            meuCache.del("findAllConta");
        }catch (e) {
            console.error('Erro ao atualizar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async deleteByNumero(req, res){
        try {
            const id = req.params.id;

            /** @type {Object} */
            const result = await ContaRepository.delete({_id: id});
            if (result.deletedCount === 0){
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_DELETE});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE});
            // Apagar cache
            meuCache.del("findAllConta");
        }catch (e) {
            console.error('Erro ao deletar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }
}
export default new ContaController();