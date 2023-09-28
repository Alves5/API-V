import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
        id: Number,
        codigo: String,
        nomeCompleto: String,
        resposavel: String,
        tipoLead: String,
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
        status: String,
        companhia: String,
        campanha_n:[{
            codigo: String
        }],
        criadoPor: String,
        atualizadoPor: String,
        camposAdicionais: mongoose.Schema.Types.Mixed
    },{
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Lead'});

const leadModel = mongoose.model('Lead', leadSchema);
export default leadModel;