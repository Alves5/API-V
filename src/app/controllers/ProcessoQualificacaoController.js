import ProcessoQualificacao from "../repositories/ProcessoQualificacaoRepository.js"
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";

class ProcessoQualificacaoController {
    async findAll(req, res){
        try {
            const result = await ProcessoQualificacao.findAll();
            if(Object.keys(result).length === 0){
                return res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }

            res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
        }catch (e) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: MESSAGES.ERROR_SERVIDOR});
        }
    }

    async store(req, res){
        const processo = req.body;
        try {
            const exists = await ProcessoQualificacao.findByNome({apiNome: processo.apiNome});
            if (exists !== null) {
                return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({ response: RESPONSE.WARNING, message: MESSAGES.CREATED_EXISTS });
            }

            await ProcessoQualificacao.create(processo);
            res.status(201).json({response: 1, message: "Registro criado com sucesso."});
        }catch (e){
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByApiNome(req, res){
        const apiNome = req.params.apiNome;
        try {
            const result = await ProcessoQualificacao.findByNome({apiNome: apiNome});
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async update(req, res){
        const apiNome = req.params.apiNome;
        const processo = req.body;
        try {
            const result = await ProcessoQualificacao.update(apiNome, processo);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByNome(req, res){
        const apiNome = req.params.apiNome;
        try {
            const result = await ProcessoQualificacao.delete(apiNome);
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
export default new ProcessoQualificacaoController();