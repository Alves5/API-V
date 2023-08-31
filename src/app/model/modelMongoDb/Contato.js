import mongoose from 'mongoose';

const contatoSchema = new mongoose.Schema({
    id_empresa: Number,
    camposAdicionais: mongoose.Schema.Types.Mixed,

}, { collection: 'Contato' }, { timestamps: true }, { versionKey: false }, { _id: false }, { strict: false });

export default contatoSchema;