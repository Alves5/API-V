import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export default function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to MongoDB");
        })
        .catch((e)=>{
            console.error(`Connection error: ${e}`);
            console.log("Couldn't connect to MongoDB");
        })
}