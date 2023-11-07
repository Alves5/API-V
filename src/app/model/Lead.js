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
        dataNascimento: {
            type: String,
            validate: {
                validator: function(v) {
                    return /\d{2}\/\d{2}\/\d{4}/.test(v);
                },
                message: props => `${props.value} não está no formato DD/MM/YYYY!`
            }
        },
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
        campanha_n: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campanha'
        }],
        processoQualificacao_n: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProcessoQualificacao'
        },
        criadoPor: String,
        atualizadoPor: {
            type: String,
            default: null
        },
        camposAdicionais: mongoose.Schema.Types.Mixed
    },{
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Lead'});

const leadModel = mongoose.model('Lead', leadSchema);
export default leadModel;