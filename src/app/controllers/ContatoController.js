import ContatoRepository from "../repositories/ContatoRepository.js";
import {HTTP_STATUS, RESPONSE, MESSAGES} from "../Utils/ApiMessages.js";
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class ContatoController {
    async findAll(req, res){
        try {
            const value = meuCache.get("findAllContato");
            if (value !== undefined){
                return res.status(HTTP_STATUS.OK).json({response: JSON.parse(value), message: MESSAGES.FIND});
            }

            const result = await ContatoRepository.findAll();
            meuCache.set("findAllContato", JSON.stringify(result), 60);
            if(Object.keys(result).length === 0){
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async store(req, res) {
        try {
            // Apagar cache
            meuCache.del(["findAllContato", "relatedListContato"]);

            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await ContatoRepository.findByFilter({codigo: contato.codigo});
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await ContatoRepository.create(contato);
            res.status(HTTP_STATUS.CREATED).json({ response: RESPONSE.SUCCESS, message: MESSAGES.CREATED });
        } catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async findById(req, res){
        const id = req.params.id;
        try {
            const result = await ContatoRepository.findByFilter({_id: id});
            if(result !== null){
                res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }
    
    async updateByCodigo(req, res){
        try {
            const id = req.params.id;
            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const result = await ContatoRepository.update(id, contato);
            if (result.modifiedCount === 1){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.ERROR, message: MESSAGES.UPDATED_NO_UPDATED});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async deleteByCodigo(req, res){
        const id = req.params.codigo;
        try {
            const result = await ContatoRepository.delete(id);
            if (result.deletedCount === 1){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE});
            }else{
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_DELETE});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async relatedList(req, res){
        const codigoContato = req.params.codigo;
        try {
            const value = meuCache.get("relatedListContato");
            if (value !== undefined){
                return res.status(HTTP_STATUS.OK).json({response: JSON.parse(value), message: MESSAGES.FIND});
            }

            const exists = await ContatoRepository.findByFilter({codigo: codigoContato});
            if (!exists){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
                return false;
            }

            const result = await ContatoRepository.searchRelatedList(codigoContato);
            meuCache.set("relatedListContato", JSON.stringify(result), 60);
            if (Object.keys(result).length === 0){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: [], message: MESSAGES.FIND_NO_EXISTS});
            }

            res.status(HTTP_STATUS.NOT_FOUND).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

}

export default new ContatoController();
