import BibliotecaModel from "../model/Biblioteca.js";

class BibliotecaRepository {

    async create(biblioteca){
        const bibliotecaModel = new BibliotecaModel(biblioteca);
        bibliotecaModel.save();
    }

    async findAll(){
        return BibliotecaModel.find();
    }

    async findByFilter(filter){
        return BibliotecaModel.findOne(filter);
    }

    async update(filter, biblioteca){
        return BibliotecaModel.updateOne(filter, biblioteca);
    }

    async delete(filter){
        return BibliotecaModel.deleteOne(filter);
    }
}
export default new BibliotecaRepository();