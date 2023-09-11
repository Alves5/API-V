import mongoose from 'mongoose';

const arquivoRelacionadoSchema = new mongoose.Schema({
    id: Number,
    nomeDocumento: String,
    objetoReferente: String,
    arquivo: Object,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed,
}, { collection: 'ArquivoRelacionado' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default arquivoRelacionadoSchema;