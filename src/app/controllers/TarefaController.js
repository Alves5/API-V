import TarefaRepository from "../repositories/TarefaRepository.js";

class TarefaController {
    async findAll(req, res){
        try {
            const result = await TarefaRepository.findAll();
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
        const tarefa = req.body;
        try {
            await TarefaRepository.create(tarefa);
            res.status(201).json({response: 1, message: "Registro criado com sucesso."});
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findById(req, res){
        const id = req.params.id;
        try {
            const result = await TarefaRepository.findById(id);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async update(req, res){
        const id = req.params.id;
        const tarefa = req.body;
        try {
            const result = await TarefaRepository.update(id, tarefa);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.status(500).json({response: 0, errors: e});
        }
    }

    async deleteById(req, res){
        const id = req.params.id;
        try {
            const result = await TarefaRepository.delete(id);
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
export default new TarefaController();