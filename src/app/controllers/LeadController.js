import {request} from "express";
import LeadRepository from "../repositories/LeadRepository.js";
import leadRepository from "../repositories/LeadRepository.js";

class LeadController {
    async findAll(req, res){
        try {
            const result = await LeadRepository.findAll();
            (result !== null) ? res.json(result) : res.json({status: true, message: 'No documents found'});
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res){
        const lead = req.body;
        const codigo = req.body.codigo;
        try {
            const exists = await LeadRepository.findByCodigo(codigo);
            if (exists !== null){
                res.json({status: false, message: 'document already exists'});
            }else{
                try {
                    await LeadRepository.create(lead);
                    res.json({status: true, message: 'Success'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try{
            const result = await LeadRepository.findByCodigo(codigo);
            (result !== null) ? res.json(result) : res.json({status: false, message: 'Document not found'});
        }catch (e) {
            res.json(e);
        }
    }
    async updateByCodigo(req, res){
        const codigo = req.params.codigo;
        const lead = req.body;
        try {
            const result = await LeadRepository.update(codigo, lead);
            if (result.modifiedCount === 1){
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document already updated or not found'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await LeadRepository.delete(codigo);
            if (result.deletedCount === 1){
                res.json({status: true, message: 'Success. Deleted document'})
            }else{
                res.json({status: false, message: 'Document not found or not deleted'});
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new LeadController();