import LeadRepository from "../repositories/LeadRepository.js";
import Contato from "../model/Contato.js";
import ContatoRepository from "../repositories/ContatoRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js"
import NodeCache from "node-cache";
const meuCache = new NodeCache();

class LeadController {
    async findAll(req, res) {
        const tipView = req.query.view;
        const cacheKey = tipView === 'kanban' ? 'findAllKanban' : 'findAll';

        try {
            const cachedData = meuCache.get(cacheKey);
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const leads = await LeadRepository.findAll();
            if (Object.keys(leads).length === 0) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({ response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS });
            }

            const result = {};
            leads.forEach((lead) => {
                // necessário corrigir esse for para trabalhar com um um objeto maior
                result[lead.processoQualificacao_n.nome] = result[lead.processoQualificacao_n.nome] || [];
                result[lead.processoQualificacao_n.nome].push(lead);
            });

            meuCache.set(cacheKey, JSON.stringify(cacheKey === 'findAllKanban' ? result : leads), 60);
            if (cacheKey === 'findAllKanban') {
                res.status(HTTP_STATUS.OK).json({ response: result, message: MESSAGES.FIND });
            } else {
                res.status(HTTP_STATUS.OK).json({ response: leads, message: MESSAGES.FIND });
            }
        } catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ response: RESPONSE.ERROR, errors: e });
        }
    }

    async store(req, res){
        try {
            // Apagar cache
            meuCache.del(["findAll", "findAllKanban"]);

            const lead = req.body;
            if (Object.keys(lead).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await LeadRepository.findByOne({codigo: lead.codigo});
            if (exists !== null){
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS});
            }

            await LeadRepository.create(lead);
            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: MESSAGES.CREATED});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async findById(req, res){
        const id = req.params.id;
        try{
            const result = await LeadRepository.findByOne({_id: id});
            if(result !== null){
                res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async updateById(req, res){
        try {
            const id = req.params.id;
            const lead = req.body;
            if (Object.keys(lead).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const result = await LeadRepository.update(id, lead);
            if (result.modifiedCount === 1){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            }else{
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});
            }
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async deleteById(req, res){
        const id = req.params.id;
        try {
            const result = await LeadRepository.delete(id);
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
        const id = req.params.id;
        try {
            const exists = await LeadRepository.findByOne({_id: id});

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