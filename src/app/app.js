import express from "express";
import connectDB from "../config/database/connectionMongoDb.js";
import routes from "./routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../config/swagger.json' assert { type: 'json' };

const router = express.Router();

// DATABASE
connectDB();

// APP
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.setHeader("Access-Control-Allow-Origin", "*")
    //Quais são os métodos que a conexão pode realizar na API
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,PATCH,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    app.use(cors());
    app.use(bodyParser.json());
    next();
});
app.use(express.json());

// ROUTE
app.use('/v1', routes);

// ROUTER SWAGGER
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
