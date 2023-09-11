import mongoose, {mongo} from 'mongoose';
import contatoSchema from "../../app/model/Contato.js";
import bibliotecaSchema from "../../app/model/Biblioteca.js";
import leadSchema from "../../app/model/Lead.js";
import campanhaSchema from "../../app/model/Campanha.js";
import contaSchema from "../../app/model/Conta.js";
import contratoSchema from "../../app/model/Contrato.js";
import oportunidadeSchema from "../../app/model/Oportunidade.js";
import orcamentoSchema from "../../app/model/Orcamento.js";
import usuarioSchema from "../../app/model/Usuario.js";


//configrações nosql
const connectionMongoDb =  mongoose.connect('mongodb://127.0.0.1:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//conectando ao banco de dados nosql
connectionMongoDb.then(function(db) {
    console.log('MongoDB conectado');
}).catch(function(err) {
    console.log('Erro ao conectar ao MongoDB: ' + err);
});

//criando a collection
mongoose.model('Contato', contatoSchema);

mongoose.model('Lead', leadSchema);
mongoose.model('Campanha', campanhaSchema);
mongoose.model('Conta', contaSchema);
mongoose.model('Contrato', contratoSchema);
mongoose.model('Oportunidade', oportunidadeSchema);
mongoose.model('Orcamento', orcamentoSchema);
mongoose.model('Usuario', usuarioSchema);


export default connectionMongoDb;