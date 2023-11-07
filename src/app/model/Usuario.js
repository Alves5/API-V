import mongoose from "mongoose";
import GenerateToken from "../Utils/GenerateToken.js";

const usuarioSchema = new mongoose.Schema({
        id: Number,
        nomeCompleto: String,
        perfil_n: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Perfil'
        },
        apelido: String,
        email: String,
        senha: {
            type: String,
            default: null
        },
        username: String,
        titulo: String,
        token: [{
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }],
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
    collection: 'Usuario'});

const usuarioModel = mongoose.model('Usuario', usuarioSchema);
export default usuarioModel;