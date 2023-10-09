import LeadRepository from "../repositories/LeadRepository.js";
import ContatoController from "./ContatoController.js";
import Contato from "../model/Contato.js";
import ContatoRepository from "../repositories/ContatoRepository.js";

class LeadController {
    async findAll(req, res){
        try {
            const result = await LeadRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async store(req, res){
        const lead = req.body;
        const codigo = req.body.codigo;
        try {
            const exists = await LeadRepository.findByCodigo(codigo);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await LeadRepository.create(lead);
                    res.status(201).json({response: 1, message: "Registro criado com sucesso."});
                }catch (e) {
                    res.status(500).json({response: 0, errors: e});
                }
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try{
            const result = await LeadRepository.findByCodigo(codigo);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }
    async updateByCodigo(req, res){
        const codigo = req.params.codigo;
        const lead = req.body;
        try {
            const result = await LeadRepository.update(codigo, lead);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await LeadRepository.delete(codigo);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async convertToContact(req, res){
        const codigo = req.params.codigo;
        try {
            const exists = await LeadRepository.findByCodigo(codigo);

            if (!exists){
                res.status(404).json({response: 0, message: 'Nenhum lead encontrado'});
                return false;
            }

            const {status, tipoLead, createdAt, updatedAt, ...restoObjeto } = exists.toObject();

            const contato = new Contato({
                ...restoObjeto,
                identidade: null,
                arquivoRelacionado_n: []
            });
            await ContatoRepository.create(contato);
            res.json({response: 1, message: 'Lead convertida para Contato'});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }
}
export default new LeadController();