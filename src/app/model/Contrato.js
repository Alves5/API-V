import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
    id: Number,
    numeroContrato: String,
    status: String,
    numeroContato: String,
    numeroProposta: String,
    seguroViajem: String,
    visto: String,
    acomodacao: String,
    translado: String,
    contratoPai: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Contrato' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

const contratoModel = mongoose.model('Contrato', contratoSchema);
export default contratoModel;