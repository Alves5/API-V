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
}, { collection: 'Tarefa' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default tarefaSchema;