import mongoose from "mongoose";
import {Schema} from "mongoose";

const painelSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Painel' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default painelSchema;