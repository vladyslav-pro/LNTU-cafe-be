import express from "express";
import bodyParser from "body-parser";
import {apiRoutes} from "../routes/api-routes";

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(bodyParser.json());
app.use(jsonBodyMiddleware);

app.use('/api', apiRoutes());