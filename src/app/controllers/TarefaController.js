import TarefaRepository from "../repositories/TarefaRepository.js";

class TarefaController {
    async findAll(req, res){
        try {
            const result = await TarefaRepository.findAll();
            (result !== null) ? res.json(result) : res.json({status: false, message: 'No documents found'});
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res){
        const tarefa = req.body;
        try {
            await TarefaRepository.create(tarefa);
            res.json({status: true, message: 'Success'});
        }catch (e) {
            res.json(e);
        }
    }

    async findById(req, res){
        const id = req.params.id;
        try {
            const result = await TarefaRepository.findById(id);
            (result !== null) ? res.json(result) : res.json({status: false, message: 'Document not found'});
        }catch (e) {
            res.json(e);
        }
    }

    async update(req, res){
        const id = req.params.id;
        const tarefa = req.body;
        try {
            const result = await TarefaRepository.update(id, tarefa);
            if (result.modifiedCount === 1){
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteById(req, res){
        const id = req.params.id;
        try {
            const result = await TarefaRepository.delete(id);
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
export default new TarefaController();