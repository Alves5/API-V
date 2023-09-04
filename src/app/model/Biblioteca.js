import mongoose from "mongoose";
import {Schema} from "mongoose";

const bibliotecaSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    tipo: String,
    modeloTexto: String,
    modeloContrato: Object,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Biblioteca' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default bibliotecaSchema;