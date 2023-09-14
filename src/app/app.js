import express from "express";
import connectionMongoDb from "../config/database/connectionMongoDb.js";
import routes from "./routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../config/swagger.json' assert { type: 'json' };

const app = express();

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.setHeader("Access-Control-Allow-Origin", "*")
    //Quais são os métodos que a conexão pode realizar na API
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Content-type")
    app.use(cors());
    app.use(bodyParser.json());
    next();
});

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//use routes
app.use(routes);

export default app;
