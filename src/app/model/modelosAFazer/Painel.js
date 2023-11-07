import mongoose from "mongoose";

const painelSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    descricao: String,
    criadoPor: String,
    atualizadoPor: {
        type: String,
        default: null
    },
    camposAdicionais: mongoose.Schema.Types.Mixed
}, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Painel'});

export default painelSchema;