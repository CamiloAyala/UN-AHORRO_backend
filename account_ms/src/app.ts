import express from "express";
import morgan from "morgan";
import cors from "cors"

// Init
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());


// Routes


export default app;