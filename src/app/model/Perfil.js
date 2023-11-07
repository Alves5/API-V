import mongoose from "mongoose";

const perfilSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    permissoes: {
        criar: Boolean,
        excluir: Boolean,
        editar: Boolean,
        editarTodos: Boolean,
        verTodos: Boolean
    },
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
    collection: 'Perfil'});

const perfilModel = mongoose.model('Perfil', perfilSchema);

export default perfilModel;