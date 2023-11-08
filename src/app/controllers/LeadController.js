import LeadRepository from "../repositories/LeadRepository.js";
import Contato from "../model/Contato.js";
import ContatoRepository from "../repositories/ContatoRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js"
import NodeCache from "node-cache";
import ProcessoQualificacaoRepository from "../repositories/ProcessoQualificacaoRepository.js";
const meuCache = new NodeCache();


class LeadController {
    async findAll(req, res) {
        const {tipView} = req.params;
        const cacheKey = tipView === 'kanban' ? 'findAllKanbanLead' : 'findAllLead';

        try {
            const cachedData = meuCache.get(cacheKey);
            if (cachedData !== undefined) {
                return res.status(HTTP_STATUS.OK).json({ response: JSON.parse(cachedData), message: MESSAGES.FIND });
            }

            const leads = await LeadRepository.findAll(tipView);
            if (Object.keys(leads).length === 0) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({ response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS });
            }

            meuCache.set(cacheKey, JSON.stringify(leads), 60);
            res.status(HTTP_STATUS.OK).json({ response: leads, message: MESSAGES.FIND });
        } catch (e) {
            console.error('Erro ao buscar os registros:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ response: RESPONSE.ERROR, errors: e });
        }
    }

    async store(req, res){
        try {
            const lead = req.body;
            if (Object.keys(lead).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const exists = await LeadRepository.findByOne({codigo: lead.codigo});
            if (exists !== null){
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS});
            }

            const result = await ProcessoQualificacaoRepository.findByFilter({apiNome: 'aberto'});
            lead.processoQualificacao_n = result._id !== null ? result._id : null;

            await LeadRepository.create(lead);
            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: MESSAGES.CREATED});
            // Apagar cache
            meuCache.del(["findAllLead", "findAllKanbanLead"]);
        }catch (e) {
            console.error('Erro ao criar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async findById(req, res){
        try{
            const id = req.params.id;
            const result = await LeadRepository.findByOne({_id: id});
            if(result === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.FIND_NO_EXISTS});
            }

            res.status(HTTP_STATUS.OK).json({response: result, message: MESSAGES.FIND});
        }catch (e) {
            console.error('Erro ao buscar o registro:', e);
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

            const result = await LeadRepository.update({_id: id}, lead);
            if (result === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            // Apagar cache
            meuCache.del(["findAllLead", "findAllKanbanLead"]);
        }catch (e) {
            console.error('Erro ao atualizar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async updateProcess(req, res){
        try {
            const {id, processoQualificacao} = req.body;
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            if(!id || !processoQualificacao){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: 'Campo(s) vazio(s), verifique antes de enviar novamente.'})
            }

            const result = await LeadRepository.update({_id: id}, {processoQualificacao_n: processoQualificacao});
            if (result === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: MESSAGES.UPDATED_NO_UPDATED});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.UPDATED});
            // Apagar cache
            meuCache.del(["findAllLead", "findAllKanbanLead"]);
        }catch (e) {
            console.error('Erro ao atualizar o processo: ',e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async deleteById(req, res){
        const id = req.params.id;
        try {
            /** @type {Object} */
            const result = await LeadRepository.delete(id);
            if (result.deletedCount === 0){
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_DELETE});
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE});
            // Apagar cache
            meuCache.del(["findAllLead", "findAllKanbanLead"]);
        }catch (e) {
            console.error('Erro ao deletar o registro:', e);
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
                arquivoRelacionado_n: null
            });
            await ContatoRepository.create(contato);
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Lead convertida para Contato.'});
        }catch (e) {
            console.error('Erro ao converter o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, errors: e});
        }
    }

    async deleteMultipleLeads(req, res){
        try {
            const { severalSelected } = req.body;
            if (severalSelected === undefined){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const existingLeads = await LeadRepository.findExistingLeads(severalSelected);
            const existingIds = existingLeads.map(lead => lead._id);

            /** @type {Object} */
            const result = await LeadRepository.deleteMultipleIds(existingIds);
            if (result.deletedCount === 0) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: MESSAGES.DELETE_NO_MANY });
            }

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: MESSAGES.DELETE_MANY });
            // Apagar cache
            meuCache.del(["findAllLead", "findAllKanbanLead"]);
        }catch (e) {
            console.error(e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR, errors: e });
        }
    }

}
export default new LeadController();