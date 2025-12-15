import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  eliminarProducto
} from "../models/products.models.js";

export async function listProductsService() {
  return obtenerProductos();
}

export async function getProductService(id) {
  return obtenerProducto(id);
}

export async function createProductService(data) {
  return crearProducto(data);
}

export async function deleteProductService(id) {
  return eliminarProducto(id);
}
