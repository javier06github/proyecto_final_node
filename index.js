import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import rutasAuth from "./src/routes/auth.routes.js";
import rutasProducts from "./src/routes/products.routes.js";

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json()); // parser JSON

// Rutas
app.use("/auth", rutasAuth);
app.use("/api/products", rutasProducts);

// 404 rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Handler general de errores (400/500)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.message || "Error interno del servidor";
  res.status(status).json({ error: msg });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
