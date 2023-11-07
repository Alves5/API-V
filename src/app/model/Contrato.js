import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
        id: Number,
        numeroContrato: String,
        status: String,
        codigoContato_n: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contato'
        },
        numeroProposta: String,
        seguroViajem: String,
        visto: String,
        acomodacao: String,
        translado: String,
        contratoPai: String,
        criadoPor: String,
        atualizadoPor: {
            type: String,
            default: null
        },
        camposAdicionais: mongoose.Schema.Types.Mixed
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Contrato'});

const contratoModel = mongoose.model('Contrato', contratoSchema);
export default contratoModel;