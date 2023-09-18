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
}, { collection: 'Lead' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

const leadModel = mongoose.model('Lead', leadSchema);
export default leadModel;