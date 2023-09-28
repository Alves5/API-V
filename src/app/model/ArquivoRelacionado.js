import mongoose from 'mongoose';

const arquivoRelacionadoSchema = new mongoose.Schema({
    id: Number,
    nomeDocumento: String,
    arquivo: {
        originalname : String,
        mimetype  : String,
        buffer    : Buffer,
        size     : Number
    },
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed,
}, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'ArquivoRelacionado'});

const arquivoRelacionadoModel = mongoose.model('ArquivoRelacionado', arquivoRelacionadoSchema);
export default arquivoRelacionadoModel;