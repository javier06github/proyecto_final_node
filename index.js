import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("API OK"));

export default app;
