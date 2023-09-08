import mongoose from "mongoose";
import {Schema} from "mongoose";

const documentoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    documento: {
        nome: String,
        data: Buffer,
        contentType: String
    },
    descricao: String,
    relacionadoA: String,
    criadoPor: String,
    atualizado: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Documento' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default documentoSchema;