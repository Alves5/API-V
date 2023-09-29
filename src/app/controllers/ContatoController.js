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
        const numero = req.body.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numero);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await ContatoRepository.create(contato);
                    res.status(201).json({response: 1, message: "Registro criado com sucesso."});
                }catch (e) {
                    res.status(500).json(e);
                }
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numero;
        try {
            const result = await ContatoRepository.findByNumero(numero);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado"});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }
    
    async updateByNumero(req, res){
        const numero = req.params.numero;
        const contato = req.body;
        try {
            const result = await ContatoRepository.update(numero, contato);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteByNumero(req, res){
        const numero = req.params.numero;
        try {
            const result = await ContatoRepository.delete(numero);
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
        const numeroContato = req.params.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numeroContato);
            if (!exists){
                res.status(404).json({response: 0, message: 'Registro não encontrado.'});
                return false;
            }

            const result = await ContatoRepository.searchRelatedList(numeroContato);
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
