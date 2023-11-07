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
            codigo: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Produto'
            },
            quantidade: {
                type: Number
            },
            preco: {
                type: Decimal128
            },
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
        camposAdicionais: mongoose.Schema.Types.Mixed
    }, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Oportunidade'});

const oportunidadeModel = mongoose.model('Oportunidade', oportunidadeSchema);
export default oportunidadeModel;