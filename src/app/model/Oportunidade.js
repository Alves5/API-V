import mongoose from "mongoose";
import {Decimal128, Double} from "mongodb";

const oportunidadeSchema = new mongoose.Schema({
        id: Number,
        numeroOportunidade: String,
        privado: Boolean,
        nomeOportunidade: String,
        nomeConta: String,
        tipo: String,
        leadSource: String,
        quantia: Decimal128,
        dataEncerramento: Date,
        proximaEtapa: String,
        estagio: String,
        propabilidade: String,
        origemPrincipalCampanha: String,
        descricao: String,
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