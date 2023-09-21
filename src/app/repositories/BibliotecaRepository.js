import BibliotecaModel from "../model/Biblioteca.js";

class BibliotecaRepository {

    async create(biblioteca){
        const bibliotecaModel = new BibliotecaModel(biblioteca);
        bibliotecaModel.save();
    }

    async findAll(){
        return await BibliotecaModel.find();
    }

    async findByCodigo(codigo){
        return await BibliotecaModel.findOne({codigo: codigo});
    }

    async update(codigo, biblioteca){
        return await BibliotecaModel.updateOne({codigo: codigo}, biblioteca);
    }

    async delete(codigo){
        return await BibliotecaModel.deleteOne({codigo: codigo});
    }
}
export default new BibliotecaRepository();