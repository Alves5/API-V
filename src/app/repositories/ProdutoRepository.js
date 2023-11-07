import ProdutoModel from "../model/Produto.js";


class ProdutoRepository {
    findAll(){
        return ProdutoModel.find();
    }
    create(prod){
        const produto = new ProdutoModel(prod);
        produto.save();
    }
    findById(id){
        return ProdutoModel.findOne({_id: id});
    }
    update(id, prod){
        return ProdutoModel.updateOne({_id: id}, {$set: prod}, {new: true});
    }
    delete(id){
        return ProdutoModel.deleteOne({_id: id});
    }
}
export default new ProdutoRepository();