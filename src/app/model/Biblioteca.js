import mongoose from "mongoose";

const bibliotecaSchema = new mongoose.Schema({
        codigo: String,
        nome: String,
        tipo: String,
        modeloTexto: String,
        modeloContrato: {
            originalname : String,
            mimetype  : String,
            buffer    : Buffer,
            size     : Number
        },
        descricao: String,
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
    collection: 'Biblioteca'});

const bibliotecaModel = mongoose.model('Biblioteca', bibliotecaSchema);
export default bibliotecaModel;