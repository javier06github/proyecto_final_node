import { createToken } from "../data/token.js";

const USER = { email: "admin@demo.com", password: "123456", uid: "u1" };

export async function loginController(req, res, next) {
  try {
    const { email, password } = req.body || {};
    if (email !== USER.email || password !== USER.password) {
      const err = new Error("Credenciales inválidas");
      err.status = 401;
      throw err;
    }
    const token = createToken({ uid: USER.uid, email: USER.email });
    res.json({ type: "Bearer", token });
  } catch (e) { next(e); }
}
