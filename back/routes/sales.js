import express from "express";
import {
  listSales,
  createSale,
  getSale,
  updateSale,
  deleteSale
} from "../controllers/salesController.js";

const router = express.Router();

// GET /api/sales - Obtener todas las ventas
router.get("/", listSales);

// GET /api/sales/:id - Obtener una venta específica
router.get("/:id", getSale);

// POST /api/sales - Crear una nueva venta
router.post("/", createSale);

// PUT /api/sales/:id - Actualizar una venta
router.put("/:id", updateSale);

// DELETE /api/sales/:id - Eliminar una venta
router.delete("/:id", deleteSale);

export default router;