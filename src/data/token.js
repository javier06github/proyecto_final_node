import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.JWT_SECRET_KEY;

export function createToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "2h" });
}
