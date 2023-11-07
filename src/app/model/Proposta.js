import mongoose from "mongoose";
import {Decimal128} from "mongodb";

const propostaSchema = new mongoose.Schema({
    id: Number,
    numeroProposta: String,
    numeroContato: String,
    fase: String,
    pais: String,
    cidade: String,
    instituicao: String,
    tipo: String,
    valor: Decimal128,
    turma: String,
    duracao: String,
    cargaHoraria: Date,
    tipoAcomodacao: String,
    duracaoAcomodacao: String,
    valorAcomodacao: Decimal128,
    descricaoTaxaAcomodacao: String,
    taxaAcomodacao: Decimal128,
    descricaoAgenciaAcomodacao: String,
    agenciaAcomodacao: String,
    cambio: Decimal128,
    totalPessoa: Decimal128,
    moedaContratante: String,
    simboloMoedaContratante: String,
    moedaDestino: String,
    simboloMoedaDestino: String,
    dataPrevistaEmbarque: Date,
    dataMaximaEmbarque: Date,
    taxaDesistenciaAluno: Decimal128,
    valorEntrada: Decimal128,
    tipoPagamentoEntrada: String,
    dataEntrada: Date,
    quantidadeParcela: {
        type: Number,
        validate:{
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    valorParcela: Decimal128,
    tipoPagamentoParcela: String,
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
    collection: 'Proposta'});

const propostaModel = mongoose.model('Proposta', propostaSchema)

export default propostaModel;