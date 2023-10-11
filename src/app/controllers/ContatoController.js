import ContatoRepository from "../repositories/ContatoRepository.js";
import contatoModel from "../model/Contato.js";
import FieldsCompatible from "../Utils/FieldsCompatible.js";

class ContatoController {
    async findAll(req, res){
        try {
            const result = await ContatoRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async store(req, res) {
        try {
            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(400).json({ response: 0, message: "O corpo da requisição não foi enviado. Certifique-se de incluir os dados necessários no corpo da sua requisição antes de tentar novamente." });
            }

            const exists = await ContatoRepository.findByCodigo(contato.codigo);
            if (exists !== null) {
                return res.status(422).json({ response: 0, message: "O registro já existe" });
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(contatoModel, contato);
            if (!isCompatible){
                return res.status(400).json({ response: 0, message: "JSON não é compatível com o modelo de dados." });
            }

            await ContatoRepository.create(contato);
            res.status(201).json({ response: 1, message: "Registro criado com sucesso." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ response: 0, message: "Erro interno do servidor", errors: error});
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await ContatoRepository.findByCodigo(codigo);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado"});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }
    
    async updateByCodigo(req, res){
        try {
            const codigo = req.params.codigo;
            const contato = req.body;
            if (Object.keys(contato).length === 0){
                return res.status(400).json({ response: 0, message: "O corpo da requisição não foi enviado. Certifique-se de incluir os dados necessários no corpo da sua requisição antes de tentar novamente." });
            }

            const isCompatible = FieldsCompatible.areFieldsCompatible(contatoModel, contato, ['codigo']);
            if (!isCompatible){
                return res.status(400).json({ response: 0, message: "JSON não é compatível com o modelo de dados." });
            }

            const result = await ContatoRepository.update(codigo, contato);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await ContatoRepository.delete(codigo);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async relatedList(req, res){
        const codigoContato = req.params.codigo;
        try {
            const exists = await ContatoRepository.findByCodigo(codigoContato);
            if (!exists){
                res.status(404).json({response: 0, message: 'Registro não encontrado.'});
                return false;
            }

            const result = await ContatoRepository.searchRelatedList(codigoContato);
            if (Object.keys(result).length !== 0){
                res.status(404).json({response: result, message: 'Registros encontrados com sucesso.'});
            }else{
                res.status(404).json({response: [], message: 'Registros não encontrados.'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

}

export default new ContatoController();
