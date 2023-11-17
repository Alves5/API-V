import LeadModel from "../model/Lead.js";
import mongoose from "mongoose";

class LeadRepository {
    findAll(type){
        if (type === 'kanban'){
            return LeadModel.aggregate([
                {
                    $lookup: {
                        from: 'ProcessoQualificacao',
                        localField: 'processoQualificacao_n',
                        foreignField: '_id',
                        as: 'processo_qualificacao'
                    }
                },
                {
                    $unwind: '$processo_qualificacao'
                },
                {
                    $addFields: {
                        statusOrder: {
                            $switch: {
                                branches: [
                                    { case: { $eq: ["$processo_qualificacao.nome", "Aberto"] }, then: 1 },
                                    { case: { $eq: ["$processo_qualificacao.nome", "Contato"] }, then: 2 },
                                    { case: { $eq: ["$processo_qualificacao.nome", "Qualificado"] }, then: 3 },
                                    { case: { $eq: ["$processo_qualificacao.nome", "Fechado"] }, then: 4 }, // Valor maior para 'Fechado'
                                    // Adicione outros casos se necessário
                                ],
                                default: 5 // Para quaisquer outros status
                            }
                        }
                    }
                },
                {
                    $group: {
                        _id: '$processo_qualificacao.nome',
                        statusOrder: { $first: '$statusOrder' },
                        leads: { $push: '$$ROOT' }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        nomeProcesso: '$_id',
                        statusOrder: 1,
                        leads: 1
                    }
                },
                {
                    $sort: {'statusOrder': 1 }
                },
            ]);
        }

        return LeadModel.find();
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

    findById(id){
        const objectId = new mongoose.Types.ObjectId(id);
        return LeadModel.aggregate([
            {
                $match: {
                    _id: objectId
                }
            },
            {
                $lookup: {
                    from: 'ProcessoQualificacao',
                    localField: 'processoQualificacao_n',
                    foreignField: '_id',
                    as: 'processo_qualificacao'
                }
            },
            {
                $project: {
                    _id: 0,
                    lead: '$$ROOT',
                    processo_qualificacao: 1
                }
            }
        ]);
    }

    update(filter, leadData){
        return LeadModel.findOneAndUpdate(filter, leadData, {new: true});
    }

    delete(id){
        return LeadModel.deleteOne({_id: id}, {new: true});
    }

    deleteMultipleIds(ids){
        return LeadModel.deleteMany({ _id: { $in: ids } })
    }

}
export default new LeadRepository();