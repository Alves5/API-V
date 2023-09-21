import mongoose from 'mongoose';

const arquivoRelacionadoSchema = new mongoose.Schema({
    nomeDocumento: String,
    objetoReferente: String,
    arquivo: {
        originalname : String,
        mimetype  : String,
        buffer    : Buffer,
        size     : Number
    },
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed,
}, { collection: 'ArquivoRelacionado' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });
const arquivoRelacionadoModel = mongoose.model('ArquivoRelacionado', arquivoRelacionadoSchema);
export default arquivoRelacionadoModel;