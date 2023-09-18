import mongoose from "mongoose";
import {Double} from "mongodb";

const propostaSchema = new mongoose.Schema({
    id: Number,
    numeroProposta: String,
    numeroContato: String,
    fase: String,
    pais: String,
    cidade: String,
    instituicao: String,
    tipo: String,
    valor: Double,
    turma: String,
    duracao: String,
    cargaHoraria: Date,
    tipoAcomodacao: String,
    duracaoAcomodacao: String,
    valorAcomodacao: Double,
    descricaoTaxaAcomodacao: String,
    taxaAcomodacao: Double,
    descricaoAgenciaAcomodacao: String,
    agenciaAcomodacao: String,
    cambio: Double,
    totalPessoa: Double,
    moedaContratante: String,
    simboloMoedaContratante: String,
    moedaDestino: String,
    simboloMoedaDestino: String,
    dataPrevistaEmbarque: Date,
    dataMaximaEmbarque: Date,
    taxaDesistenciaAluno: Double,
    valorEntrada: Double,
    tipoPagamentoEntrada: String,
    dataEntrada: Date,
    quantidadeParcela: {
        type: Number,
        validate:{
            validator: Number.isInteger(),
            message: '{VALUE} is not an integer value'
        }
    },
    valorParcela: Double,
    tipoPagamentoParcela: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, { collection: 'Proposta' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default propostaSchema;