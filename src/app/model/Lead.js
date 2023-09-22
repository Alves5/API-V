import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
        id: Number,
        codigo: String,
        nomeCompleto: String,
        companhia: String,
        telefone: String,
        email: String,
        status: String,
        criadoPor: String,
        atualizadoPor: String,
        camposAdicionais: mongoose.Schema.Types.Mixed
    },{
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Lead'});

const leadModel = mongoose.model('Lead', leadSchema);
export default leadModel;