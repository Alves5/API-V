import mongoose from "mongoose";

const bibliotecaSchema = new mongoose.Schema({
    id: Number,
    codigo: String,
    nome: String,
    tipo: String,
    modeloTexto: String,
    modeloContrato: Object,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Biblioteca' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

const bibliotecaModel = mongoose.model('Biblioteca', bibliotecaSchema);
export default bibliotecaModel;