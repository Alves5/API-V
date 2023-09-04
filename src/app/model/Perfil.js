import mongoose from "mongoose";
import {Schema} from "mongoose";

const perfilSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    perfilExistente: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Perfil' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default perfilSchema;