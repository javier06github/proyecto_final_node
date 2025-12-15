import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.JWT_SECRET_KEY;

export function authentication(req, res, next) {
  // LOG 1: ver si llega el header Authorization
  console.log("AUTH → Authorization header:", req.headers.authorization);

  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;

  if (!token) return res.status(401).json({ error: "Token requerido" });

  jwt.verify(token, SECRET, (err, payload) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = payload;
    next();
  });
}
