import mongoose from "mongoose";
import {Decimal128, Double} from "mongodb";

const contaSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    contaPrincipal: String,
    numeroConta: String,
    site: String,
    tipo: String,
    industria: String,
    receitaAnual: Decimal128,
    avaliacao: String,
    telefone: String,
    descricao: String,
    endereco: String,
    cep: String,
    bairro: String,
    cidade: String,
    estado: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Conta' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

const contaModel = mongoose.model('Conta', contaSchema);
export default contaModel;