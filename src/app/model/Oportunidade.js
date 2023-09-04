import mongoose from "mongoose";
import {Schema} from "mongoose";
import {Double} from "mongodb";

const oportunidadeSchema = new mongoose.Schema({
    id: Number,
    privado: Boolean,
    nomeOportunidade: String,
    nomeConta: String,
    tipo: String,
    leadSource: String,
    quantia: Double,
    dataEncerramento: Date,
    proximaEtapa: String,
    estagio: String,
    propabilidade: String,
    origemPrincipalCampanha: String,
    descricao: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Oportunidade' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default oportunidadeSchema;