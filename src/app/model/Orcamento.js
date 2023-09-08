import mongoose from "mongoose";
import {Schema} from "mongoose";

const orcamentoSchema = new mongoose.Schema({
    id: Number,
    numeroOrcamento: String,
    nomeCompleto: String,
    genero: String,
    nacionalidade: String,
    dataNascimento: Date,
    rg: String,
    cpf: String,
    email: String,
    telefoneResidencial: String,
    celular: String,
    cep: String,
    estado: String,
    bairro: String,
    cidade: String,
    endereco: String,
    dataValidadePassaporte: Date,
    dataEmissaoPassaporte: Date,
    numeroPassaporte: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Orcamento' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default orcamentoSchema;