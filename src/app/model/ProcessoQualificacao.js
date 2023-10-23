import mongoose from "mongoose";

const processoQualificacaoSchema = new mongoose.Schema({
    id: Number,
    apiNome: String,
    nome: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
},{
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'ProcessoQualificacao'});

const processoQualificacaoModel = mongoose.model('ProcessoQualificacao', processoQualificacaoSchema);
export default processoQualificacaoModel;