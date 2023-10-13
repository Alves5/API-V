import ContatoRepository from "../repositories/ContatoRepository.js";
import contatoModel from "../model/Contato.js";
import FieldsCompatible from "../Utils/FieldsCompatible.js";
import {HTTP_STATUS, RESPONSE, MESSAGES} from "../Utils/ApiMessages.js";

class ContatoController {
    async findAll(req, res){
        try {
            const result = await ContatoRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }else{
                res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async store(req, res) {
        try {
            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await ContatoRepository.findByCodigo(contato.codigo);
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(contatoModel, contato);
            if (!isCompatible){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_JSON });
            }

            await ContatoRepository.create(contato);
            res.status(HTTP_STATUS.CREATED).json({ response: RESPONSE.SUCCESS, message: MESSAGES.CREATED });
        } catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await ContatoRepository.findByCodigo(codigo);
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
            const codigo = req.params.codigo;
            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(contatoModel, contato, ['codigo']);
            if (!isCompatible){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_JSON});
            }

            const result = await ContatoRepository.update(codigo, contato);
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
        const codigo = req.params.codigo;
        try {
            const result = await ContatoRepository.delete(codigo);
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
            const exists = await ContatoRepository.findByCodigo(codigoContato);
            if (!exists){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
                return false;
            }

            const result = await ContatoRepository.searchRelatedList(codigoContato);
            if (Object.keys(result).length !== 0){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: result, message: MESSAGES.FIND});
            }else{
                res.status(HTTP_STATUS.NOT_FOUND).json({response: [], message: MESSAGES.FIND_NO_EXISTS});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e});
        }
    }

}

export default new ContatoController();
