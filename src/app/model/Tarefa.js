import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
    id: Number,
    assunto: String,
    dataVencimento: Date,
    prioridade: String,
    status: String,
    nomeConta: String,
    descricao: String,
    atribuidoA: String,
    criadoPor: String,
    atualizadoPor: String,
    camposAdicionais: mongoose.Schema.Types.Mixed
}, {
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Tarefa'});

const tarefaModel = mongoose.model('Tarefa', tarefaSchema);

export default tarefaModel;