import LeadModel from "../model/Lead.js";

class LeadRepository {
    findAll(){
        return LeadModel.find().limit(30);
    }

    findExistingLeads(ids){
        return LeadModel.find({ _id: { $in: ids } })
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

    deletarVarios(ids){
        return LeadModel.deleteMany({ _id: { $in: ids } })
    }

}
export default new LeadRepository();