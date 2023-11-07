import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    ativo: Boolean,
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
    collection: 'Produto'});

const produtoModel = mongoose.model('Produto', produtoSchema);

export default produtoModel;