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
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Biblioteca'});

const bibliotecaModel = mongoose.model('Biblioteca', bibliotecaSchema);
export default bibliotecaModel;