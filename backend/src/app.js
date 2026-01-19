import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { corsOptions } from "./config/cors.js";
import { apiLimiter } from "./config/security.js";
import routes from "./routes/index.js";

const app = express();

// Segurança
app.use(helmet());
app.use(cors(corsOptions));
app.use(apiLimiter);

// Parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logs
app.use(morgan("dev"));

// Rotas
app.use("/api", routes);

// Rota para testar a api
app.get("/teste", (_, res) => {
    res.json({ status: "OK", service: "nhonga-api" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: err.message || 'Erro interno do servidor',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

export default app;
