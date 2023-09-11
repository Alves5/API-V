import mongoose from "mongoose";
import {Decimal128} from "mongodb";

const campanhaSchema = new mongoose.Schema({
    id: Number,
    codigo: String,
    nomeCampanha: String,
    ativo: String,
    status: String,
    dataInicial: Date,
    dataFinal: Date,
    receitaEsperada: Decimal128,
    custoOrcado: Decimal128,
    custoReal: Decimal128,
    respostaEsperada: Decimal128,
    numeroEnviado: String,
    campanhaPrincipal: String,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
},{ collection: 'Campanha' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default campanhaSchema;