import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const contatoSchema = new mongoose.Schema({
    id_empresa: Number,
    status: String,
    numeroContato: String,
    numeroProposta: String,
    documentoCliente: String,
    seguroViajante: String,
    visto: String,
    acomodacao: String,
    translado: String,
    criadoPor: String,
    contratoPai: String,
    camposAdicionais: mongoose.Schema.Types.Mixed,
}, { collection: 'Contato' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default contatoSchema;