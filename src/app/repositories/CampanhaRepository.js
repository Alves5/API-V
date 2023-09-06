import mongoose from "mongoose";

class CampanhaRepository {
    findAll(){
        const campanha = new mongoose.model('Campanha');
        return campanha.find();
    }
    create(camp){
        const campanha = new mongoose.model('Campanha')(camp);
        campanha.save();
    }
    findByCodigo(codigo){
        const campanha = new mongoose.model('Campanha');
        return campanha.findOne({codigo: codigo});
    }
    update(codigo, camp){
        const campanha = new mongoose.model('Campanha');
        return campanha.updateOne({codigo: codigo}, {$set: camp}, {new: true});
    }
    delete(codigo){
        const campanha = new mongoose.model('Campanha');
        return campanha.deleteOne({codigo: codigo}, {new: true});
    }
}
export default new CampanhaRepository();