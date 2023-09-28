import TarefaModel from "../model/Tarefa.js";


class TarefaRepository {
    findAll(){
        return TarefaModel.find();
    }
    create(tare){
        const tarefa = new TarefaModel(tare);
        tarefa.save();
    }
    findById(id){
        return TarefaModel.findOne({_id: id});
    }
    update(id, tare){
        return TarefaModel.updateOne({_id: id}, {$set: tare}, {new: true});
    }
    delete(id){
        return TarefaModel.deleteOne({_id: id});
    }
}
export default new TarefaRepository();