import express from "express";
import routes from "./routes/routes.js";

const app = express();

const PORT = 3333;

// Middleware, a ordem deles tem impacto no funcionamento da aplicação
app.use(express.json());
app.use(routes);

global.pacientes = [];

// Tem como função somente mostrar que o servidor está rodando
app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
