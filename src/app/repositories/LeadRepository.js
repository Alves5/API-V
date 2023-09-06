import mongoose from "mongoose";

class LeadRepository {
    findAll(){
        const lead = new mongoose.model('Lead');
        return lead.find();
    }

    create(lea){
        const lead = new mongoose.model('Lead')(lea);
        lead.save();
    }

    findByCodigo(codigo){
        const lead = new mongoose.model('Lead');
        return lead.findOne({codigo: codigo});
    }

    update(codigo, lea){
        const lead = new mongoose.model('Lead');
        return lead.updateOne({codigo: codigo}, {$set: lea}, {new: true});
    }

    delete(codigo){
        const lead = new mongoose.model('Lead');
        return lead.deleteOne({codigo: codigo}, {new: true});
    }

}
export default new LeadRepository();