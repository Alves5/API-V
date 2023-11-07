import mongoose from "mongoose";

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
        endereco: {
            cep: String,
            logradouro: String,
            numero: String,
            bairro: String,
            cidade: String,
            estado: String,
            pais: String
        },
        dataValidadePassaporte: Date,
        dataEmissaoPassaporte: Date,
        numeroPassaporte: String,
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
    collection: 'Orcamento'});

const orcamentoModel = mongoose.model('Orcamento', orcamentoSchema);
export default orcamentoModel;