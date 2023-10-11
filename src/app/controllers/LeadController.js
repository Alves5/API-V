import LeadRepository from "../repositories/LeadRepository.js";
import Contato from "../model/Contato.js";
import ContatoRepository from "../repositories/ContatoRepository.js";
import FieldsCompatible from "../Utils/FieldsCompatible.js";
import leadModel from "../model/Lead.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js"

class LeadController {
    async findAll(req, res){
        try {
            const result = await LeadRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }else{
                res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async store(req, res){
        try {
            const lead = req.body;
            if (Object.keys(lead).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await LeadRepository.findByCodigo(lead.codigo);
            if (exists !== null){
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS});
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(leadModel, lead);
            if (!isCompatible){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_JSON });
            }

            await LeadRepository.create(lead);
            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: MESSAGES.CREATED});
        }catch (e) {
            res.status(500).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try{
            const result = await LeadRepository.findByCodigo(codigo);
            if(result !== null){
                res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }
    async updateByCodigo(req, res){
        try {
            const codigo = req.params.codigo;
            const lead = req.body;
            if (Object.keys(lead).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(leadModel, lead, ['codigo']);
            if (!isCompatible){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_JSON });
            }

            const result = await LeadRepository.update(codigo, lead);
            if (result.modifiedCount === 1){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await LeadRepository.delete(codigo);
            if (result.deletedCount === 1){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE});
            }else{
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_DELETE});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async convertToContact(req, res){
        const codigo = req.params.codigo;
        try {
            const exists = await LeadRepository.findByCodigo(codigo);

            if (!exists){
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Nehuma lead encontrada.'});
                return false;
            }

            const {status, tipoLead, createdAt, updatedAt, ...restoObjeto } = exists.toObject();

            const contato = new Contato({
                ...restoObjeto,
                identidade: null,
                arquivoRelacionado_n: []
            });
            await ContatoRepository.create(contato);
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Lead convertida para Contato.'});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }
}
export default new LeadController();