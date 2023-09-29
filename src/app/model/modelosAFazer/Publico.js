import mongoose from "mongoose";

const publicoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    dadosDemograficos: String,
    preferencias: String,
    descricao: String,
    criadoPor: String,
    atualizdoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Publico'});

export default publicoSchema;