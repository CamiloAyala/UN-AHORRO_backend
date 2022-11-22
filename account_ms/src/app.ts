import express from "express";
import morgan from "morgan";
import cors from "cors"
import passport from "passport";

//import { PORT } from "./config/config";
import passportMiddleware from "./middlewares/passport.middleware";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

// Init
const app = express();

// App
//app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);


// Routes
app.use(authRoutes);
app.use(userRoutes);

export default app;