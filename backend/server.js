// DEVE ser a primeira linha - carregar variáveis de ambiente
import dotenv from "dotenv";
dotenv.config();

// Agora importar o resto
import app from "./src/app.js";
import { env } from "./src/config/env.js";

app.listen(env.port, () => {
    console.log(`Nhonga API running on port ${env.port}`);
    console.log(`Database URL configured: ${process.env.DATABASE_URL ? 'Yes' : 'No'}`);
});
