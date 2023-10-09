import ContatoRepository from "../repositories/ContatoRepository.js";

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
        const contato = req.body;

        try {
            const exists = await ContatoRepository.findByCodigo(contato.codigo);

            if (exists !== null) {
                return res.status(422).json({ response: 0, message: "O registro já existe" });
            }

            await ContatoRepository.create(contato);

            return res.status(201).json({ response: 1, message: "Registro criado com sucesso." });
        } catch (error) {
            return res.status(500).json({ response: 0, message: "Erro interno do servidor" });
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
        const codigo = req.params.codigo;
        const contato = req.body;
        try {
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
                res.status(404).json({response: 0, message: 'Registros não encontrados.'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

}

export default new ContatoController();
