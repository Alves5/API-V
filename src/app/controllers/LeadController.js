import LeadRepository from "../repositories/LeadRepository.js";
import Contato from "../model/Contato.js";
import ContatoRepository from "../repositories/ContatoRepository.js";

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

    async convertLeadToContact(req, res){
        const lead = req.body;
        try {
            const empresas = lead.empresa || [];
            const origens = lead.origem || [];
            const campanhas = lead.campanha_n || [];

            const contato = new Contato({
                numero: lead.telefone,
                nomeCompleto: lead.nomeCompleto,
                resposavel: lead.resposavel,
                empresa: empresas.map(empresa => ({
                    name: empresa.name || null,
                    value: empresa.value || null
                })),
                origem: origens.map(origem => ({
                    name: origem.name || null,
                    value: origem.value || null
                })),
                dataNascimento: lead.dataNascimento,
                cpf: lead.cpf,
                identidade: null,
                nacionalidade: lead.nacionalidade,
                email: lead.email,
                website: lead.website,
                endereco: {
                    cep: lead.cep,
                    logradouro: lead.logradouro,
                    numero: lead.numero,
                    bairro: lead.bairro,
                    cidade: lead.cidade,
                    estado: lead.estado,
                    pais: lead.pais
                },
                companhia: lead.companhia,
                campanha_n: campanhas.map(campanha => ({
                    codigo: campanha.codigo || null
                })),
                arquivoRelacionado: [],
                criadoPor: lead.criadoPor,
                atualizadoPor: lead.atualizadoPor
            });
            await ContatoRepository.create(contato);
            res.json({status: true, message: 'Lead convertida para Contato'});
        }catch (e) {
            res.json(e);
        }
    }
}
export default new LeadController();