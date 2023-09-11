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
}, { collection: 'Publico' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default publicoSchema;