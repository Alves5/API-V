import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
        id: Number,
        codigo: String,
        nomeCompleto: String,
        resposavel: String,
        tipoLead: String,
        empresa: [{
            name: String,
            value: String
        }],
        origem: [{
            name: String,
            value: String
        }],
        dataNascimento: {
            type: String,
            validate: {
                validator: function(v) {
                    return /\d{2}\/\d{2}\/\d{4}/.test(v);
                },
                message: props => `${props.value} não está no formato DD/MM/YYYY!`
            }
        },
        cpf: String,
        nacionalidade: String,
        telefone: String,
        email: String,
        website: String,
        endereco: {
            cep: String,
            logradouro: String,
            numero: String,
            bairro: String,
            cidade: String,
            estado: String,
            pais: String
        },
        status: String,
        companhia: String,
        campanha_n:[{
            codigo: String
        }],
        etapasPQ: {
            type: [String],
            default: ['aberto', 'contato', 'qualificado', 'fechado'] // Valores padrão
        },
        processoQualificacao: {
            type: String,
            default: 'aberto'
        },
        criadoPor: String,
        atualizadoPor: String,
        camposAdicionais: mongoose.Schema.Types.Mixed
    },{
    timestamps: true,
    versionKey: false,
    _id: true,
    strict: false,
    collection: 'Lead'});

leadSchema.pre('findOneAndUpdate', function(next) {
    const data = this.getUpdate();
    if (data){
        const defaultValues = leadSchema.path('etapasPQ').options.default;

        if (!defaultValues.includes(data.processoQualificacao)){
            return Promise.reject(new Error('Valor inválido para processoQualificacao'));
        }
    }

    next();
});


const leadModel = mongoose.model('Lead', leadSchema);
export default leadModel;