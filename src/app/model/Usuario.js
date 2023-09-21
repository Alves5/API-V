import mongoose from "mongoose";
import GenerateToken from "../Utils/GenerateToken.js";

const usuarioSchema = new mongoose.Schema({
        id: Number,
        nomeCompleto: String,
        perfil: String,
        apelido: String,
        email: String,
        senha: {
            type: String,
            default: null
        },
        username: String,
        titulo: String,
        criadoPor: String,
        atualizadoPor: String,
        token: [{
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }],
        camposAdicionais: mongoose.Schema.Types.Mixed
    },
    {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Usuario'});

const usuarioModel = mongoose.model('Usuario', usuarioSchema);
export default usuarioModel;