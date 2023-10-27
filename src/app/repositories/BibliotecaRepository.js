import BibliotecaModel from "../model/Biblioteca.js";

class BibliotecaRepository {

    async create(biblioteca){
        const bibliotecaModel = new BibliotecaModel(biblioteca);
        bibliotecaModel.save();
    }

    async findAll(){
        return await BibliotecaModel.find();
    }

    async findByCodigo(filter){
        return await BibliotecaModel.findOne(filter);
    }

    async update(filter, biblioteca){
        return await BibliotecaModel.updateOne(filter, biblioteca);
    }

    async delete(filter){
        return await BibliotecaModel.deleteOne(filter);
    }
}
export default new BibliotecaRepository();