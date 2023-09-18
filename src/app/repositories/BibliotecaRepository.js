import BibliotecaModel from "../model/Biblioteca.js";

class BibliotecaRepository {

    findAll(){
        return BibliotecaModel.find();
    }

    create(biblio){
        const biblioteca = new BibliotecaModel(biblio);
        biblioteca.save();
    }

    findByCodigo(codigo){
        return BibliotecaModel.findOne({codigo: codigo});
    }

    update(codigo, biblio){
        return BibliotecaModel.updateOne({codigo: codigo}, {$set: biblio}, {new: true});
    }

    delete(codigo){
        return BibliotecaModel.deleteOne({codigo: codigo}, {new: true});
    }
}
export default new BibliotecaRepository();