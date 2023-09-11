import mongoose from 'mongoose';

const contatoSchema = new mongoose.Schema({
    id: Number,
    numero: String,
    nomeCompleto: String,
    responsavel: String,
    nacionalidade: String,
    dataNascimento: Date,
    cpf: String,
    identidade: String,
    cep: String,
    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    email: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed,
}, { collection: 'Contato' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default contatoSchema;