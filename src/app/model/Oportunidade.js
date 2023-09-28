import mongoose from "mongoose";
import {Decimal128, Double} from "mongodb";

const oportunidadeSchema = new mongoose.Schema({
        id: Number,
        numeroOportunidade: String,
        privado: Boolean,
        nomeOportunidade: String,
        nomeConta: String,
        tipo: String,
        funcoesContato: [{
            codigo: String,
            nome: String,
            funcao: String
        }],
        quantia: Decimal128,
        dataEncerramento: Date,
        proximaEtapa: String,
        estagio: String,
        propabilidade: String,
        origemPrincipalCampanha: String,
        descricao: String,
        produto_n: [{
            codigo: String,
            quantidade: {
                type: Number,
                default: null
            },
            preco: {
                type: Decimal128,
                default: null
            },
        }],
        arquivoRelacionado_n: [{
            codigo: String
        }],
        criadoPor: String,
        atualizadoPor: String,
        camposAdicionais: mongoose.Schema.Types.Mixed
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Oportunidade'});

const oportunidadeModel = mongoose.model('Oportunidade', oportunidadeSchema);
export default oportunidadeModel;