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
    collection: 'Campanha'});

const campanhaModel = mongoose.model('Campanha', campanhaSchema);
export default campanhaModel;