import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
try {
    await client.connect();
    console.log('Connected successfully to server');
}catch (e) {
    console.log(e.message);
}
export default client;