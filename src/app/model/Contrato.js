import mongoose from "mongoose";
import {Schema} from "mongoose";

const contratoSchema = new mongoose.Schema({
    id: Number,
    numeroContrato: String,
    status: String,
    numeroContato: String,
    numeroProposta: String,
    documento: Object,
    seguroViajem: String,
    visto: String,
    acomodacao: String,
    translado: String,
    contratoPai: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Contrato' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default contratoSchema;