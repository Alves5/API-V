import mongoose from "mongoose";
import {Schema} from "mongoose";
import {Double} from "mongodb";

const campanhaSchema = new mongoose.Schema({
    id: Number,
    nomeCampanha: String,
    ativo: String,
    status: String,
    dataInicial: Date,
    dataFinal: Date,
    receitaEsperada: Double,
    custoOrcado: Double,
    custoReal: Double,
    respostaEsperada: Double,
    numeroEnviado: String,
    campanhaPrincipal: String,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
},{ collection: 'Campanha' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default campanhaSchema;