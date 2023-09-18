import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: Number,
    nomeCompleto: String,
    perfil: String,
    apelido: String,
    email: String,
    username: String,
    titulo: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Usuario' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

const usuarioModel = mongoose.model('Usuario', usuarioSchema);
export default usuarioModel;