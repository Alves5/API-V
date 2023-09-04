import mongoose from "mongoose";
import {Schema} from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: Number,
    nomeProduto: String,
    status: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Produto' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default produtoSchema;