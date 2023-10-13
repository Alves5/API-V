import LeadModel from "../model/Lead.js";

class LeadRepository {
    findAll(){
        return LeadModel.find().limit(30);
    }

    create(lea){
        const lead = new LeadModel(lea);
        lead.save();
    }

    findByCodigo(codigo){
        return LeadModel.findOne({codigo: codigo});
    }

    update(codigo, lea){
        return LeadModel.updateOne({codigo: codigo}, {$set: lea}, {new: true});
    }

    delete(codigo){
        return LeadModel.deleteOne({codigo: codigo}, {new: true});
    }

}
export default new LeadRepository();