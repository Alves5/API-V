import LeadModel from "../model/Lead.js";

class LeadRepository {
    findAll(){
        return LeadModel.find().limit(30);
    }

    findExistingLeads(ids){
        return LeadModel.find({ _id: { $in: ids } })
    }

    create(leadData){
        return new Promise((resolve, reject) => {
            const lead = new LeadModel(leadData);
            lead.save()
                .then((registroSalvo) => {
                    resolve(registroSalvo);
                })
                .catch((erro) => {
                    reject(erro);
                });
        });
    }

    findByOne(filter){
        return LeadModel.findOne(filter);
    }

    update(filter, leadData){
        return LeadModel.findOneAndUpdate(filter, leadData, {new: true});
    }

    delete(id){
        return LeadModel.deleteOne({_id: id}, {new: true});
    }

    deletarVarios(ids){
        return LeadModel.deleteMany({ _id: { $in: ids } })
    }

}
export default new LeadRepository();