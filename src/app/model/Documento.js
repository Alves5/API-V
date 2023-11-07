import mongoose from "mongoose";

const documentoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    documento: {
        originalname: String,
        mimetype: String,
        buffer: Buffer,
        size: Number
    },
    descricao: String,
    relacionadoA: String,
    criadoPor: String,
    atualizadoPor: {
        type: String,
        default: null
    },
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Documento' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });
const documento = mongoose.model('Documento', documentoSchema);
export default documento;