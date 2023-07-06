import express from "express";
import routes from "./routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../config/swagger.json' assert { type: 'json' };

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//use routes
app.use(routes);

export default app;
