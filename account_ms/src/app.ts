import express from "express";
import morgan from "morgan";
import cors from "cors"
import { PORT } from "./config/config";

import authRoutes from "./routes/auth.routes";

// Init
const app = express();

// App
app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());


// Routes
app.use(authRoutes);

export default app;