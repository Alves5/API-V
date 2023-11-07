import mongoose from 'mongoose';

const contatoSchema = new mongoose.Schema({
        id: Number,
        codigo: String,
        nomeCompleto: String,
        resposavel: String,
        empresa: [{
            name: String,
            value: String
        }],
        origem: [{
            name: String,
            value: String
        }],
        dataNascimento: Date,
        cpf: String,
        identidade: String,
        nacionalidade: String,
        telefone: String,
        email: String,
        website: String,
        endereco: {
            cep: String,
            logradouro: String,
            numero: String,
            bairro: String,
            cidade: String,
            estado: String,
            pais: String
        },
        companhia: String,
        campanha_n: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campanha'
        }],
        arquivoRelacionado_n: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ArquivoRelacionado'
        }],
        criadoPor: String,
        atualizadoPor: {
            type: String,
            default: null
        },
        camposAdicionais: mongoose.Schema.Types.Mixed,
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: true,
    collection: 'Contato'});

const contatoModel = mongoose.model('Contato', contatoSchema);
export default contatoModel;