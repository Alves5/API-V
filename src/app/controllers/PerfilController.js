import PerfilRepository from "../repositories/PerfilRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class PerfilController {
    async findAll(req, res){
        try {
            const cachedData = meuCache.get("findAllPerfil");
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const result = await PerfilRepository.findAll();
            if(Object.keys(result).length === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            meuCache.set("findAllPerfil", JSON.stringify(result), 60);
            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            console.error('Erro ao buscar os registros:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async store(req, res){
        try {
            const perfil = req.body;
            if (Object.keys(perfil).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await PerfilRepository.findByfilter({nome: perfil.nome});
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await PerfilRepository.create(perfil);

            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: MESSAGES.CREATED});
            // Apagar cache
            meuCache.del("findAllPerfil");
        }catch (e){
            console.error('Erro ao criar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async findById(req, res){
        try {
            const id = req.params.id;
            const result = await PerfilRepository.findByfilter({_id: id});
            if(result === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            console.error('Erro ao buscar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async updateById(req, res){
        try {
            const id = req.params.id;
            const perfil = req.body;
            if (Object.keys(perfil).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const result = await PerfilRepository.update({_id: id}, perfil);
            if (result.modifiedCount === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            // Apagar cache
            meuCache.del("findAllPerfil");
        }catch (e) {
            console.error('Erro ao atualizar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async deleteById(req, res){
        try {
            const id = req.params.id;

            /** @type {Object} */
            const result = await PerfilRepository.delete({_id: id});
            if (result.deletedCount === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_DELETE});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE});
            // Apagar cache
            meuCache.del("findAllPerfil");
        }catch (e) {
            console.error('Erro ao deletar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }
}
export default new PerfilController();