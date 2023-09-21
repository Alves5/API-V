import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
        id: Number,
        numeroContrato: String,
        status: String,
        numeroContato_n: String,
        numeroProposta: String,
        seguroViajem: String,
        visto: String,
        acomodacao: String,
        translado: String,
        contratoPai: String,
        criadoPor: String,
        atualizadoPor: String,
        camposAdicionais: mongoose.Schema.Types.Mixed
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Contrato'});

const contratoModel = mongoose.model('Contrato', contratoSchema);
export default contratoModel;