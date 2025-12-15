import {
  listProductsService,
  getProductService,
  createProductService,
  deleteProductService
} from "../services/products.services.js";

export async function getAllProductsController(req, res, next) {
  try {
    const data = await listProductsService();
    res.json(data);
  } catch (e) { next(e); }
}

export async function getProductByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getProductService(id);
    if (!data) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(data);
  } catch (e) { next(e); }
}

export async function createProductController(req, res, next) {
  try {
    // LOGS mínimos para diagnosticar
    console.log("POST /api/products/create → body:", req.body);
    console.log("POST /api/products/create → user (JWT):", req.user);

    const { title, price, category, description, image } = req.body || {};
    if (!title || typeof price === "undefined" || !category) {
      const err = new Error("Datos inválidos: title, price y category son obligatorios");
      err.status = 400;
      throw err;
    }
    const created = await createProductService({ title, price, category, description, image });
    res.status(201).json(created);
  } catch (e) { next(e); }
}

export async function deleteProductController(req, res, next) {
  try {
    const { id } = req.params;
    const ok = await deleteProductService(id);
    if (!ok) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ deleted: id });
  } catch (e) { next(e); }
}
