import OportunidadeRepository from "../repositories/OportunidadeRepository.js";

class OportunidadeController {
    async findAll(req, res){
        try {
            const result = await OportunidadeRepository.findAll();
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
        const oportunidade = req.body;
        const numero = req.body.numeroOportunidade;
        try {
            const exists = await OportunidadeRepository.findByNumero(numero);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await OportunidadeRepository.create(oportunidade);
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
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.findByNumero(numero);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async updateByNumero(req, res){
        const numero = req.params.numeroOportunidade;
        const oportunidade = req.body;
        try {
            const result = await OportunidadeRepository.update(numero, oportunidade);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async deleteByNumero(req, res){
        const numero = req.params.numeroOportunidade;
        try {
            const result = await OportunidadeRepository.delete(numero);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }
}
export default new OportunidadeController();