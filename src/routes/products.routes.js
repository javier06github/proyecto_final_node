import { Router } from "express";
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController
} from "../controllers/products.controllers.js";
import { authentication } from "../midleware/authentication.js";

const router = Router();

// Públicas
router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);

// Protegidas
router.post("/create", authentication, createProductController);
router.delete("/:id", authentication, deleteProductController);

export default router;
