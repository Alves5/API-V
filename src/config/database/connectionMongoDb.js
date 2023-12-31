import mongoose from 'mongoose';

export default function connectDB() {
    const url = "mongodb+srv://root:W3rgYSm2Z5Al3zfr@db.cm37ov4.mongodb.net/db?retryWrites=true&w=majority";

    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`Database connected`);
    });

    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}