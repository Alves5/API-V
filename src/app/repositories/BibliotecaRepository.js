import mongoose from "mongoose";
class BibliotecaRepository {

    findAll(){
        const biblioteca = new mongoose.model('Biblioteca');
        return biblioteca.find();
    }

    create(biblio){
        const biblioteca = new mongoose.model('Biblioteca')(biblio);
        biblioteca.save();
    }

    findByCodigo(codigo){
        const biblioteca = new mongoose.model('Biblioteca');
        return biblioteca.findOne({codigo: codigo});
    }

    update(codigo, biblio){
        const biblioteca = new mongoose.model('Biblioteca');
        return biblioteca.updateOne({codigo: codigo}, {$set: biblio}, {new: true});
    }

    delete(codigo){
        const biblioteca = new mongoose.model('Biblioteca');
        return biblioteca.deleteOne({codigo: codigo}, {new: true});
    }
}
export default new BibliotecaRepository();