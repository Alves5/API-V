import LeadModel from "../model/Lead.js";

class LeadRepository {
    findAll(){
        return LeadModel.find().limit(30);
    }

    create(lea){
        const lead = new LeadModel(lea);
        lead.save();
    }

    findByOne(filter){
        return LeadModel.findOne(filter);
    }

    update(id, lea){
        return LeadModel.updateOne({_id: id}, {$set: lea}, {new: true});
    }

    delete(id){
        return LeadModel.deleteOne({_id: id}, {new: true});
    }

}
export default new LeadRepository();