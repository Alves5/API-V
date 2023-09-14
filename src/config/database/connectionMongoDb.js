import mongoose, {mongo} from 'mongoose';

//configurações nosql
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

export default connectionMongoDb;