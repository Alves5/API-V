import mongoose from 'mongoose';

const contatoSchema = new mongoose.Schema({
        id: Number,
        numero: String,
        nomeCompleto: String,
        companhia: String,
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
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Contato'});

const contatoModel = mongoose.model('Contato', contatoSchema);
export default contatoModel;