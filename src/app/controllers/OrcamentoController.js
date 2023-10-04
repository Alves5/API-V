import OrcamentoRepository from "../repositories/OrcamentoRepository.js";

class OrcamentoController {
    async findAll(req, res){
        try {
            const result = await OrcamentoRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async store(req, res) {
        const orcamento = req.body;
        const numero = req.body.numeroOrcamento;
        try {
            const exists = await OrcamentoRepository.findByNumero(numero);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await OrcamentoRepository.create(orcamento);
                    res.status(201).json({response: 1, message: "Registro criado com sucesso."});
                }catch (e) {
                    res.status(500).json({response: 0, errors: e});
                }
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByNumero(req, res){
        const numero = req.params.numeroOrcamento;
        try {
            const result = await OrcamentoRepository.findByNumero(numero);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async updateByNumero(req, res){
        const numero = req.params.numeroOrcamento;
        const orcamento = req.body;
        try {
            const result = await OrcamentoRepository.update(numero, orcamento);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByNumero(req, res){
        const numero = req.params.numeroOrcamento;
        try {
            const result = await OrcamentoRepository.delete(numero);
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
export default new OrcamentoController();