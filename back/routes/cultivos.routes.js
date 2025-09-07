import express from "express";
import Cultivo from "../models/Cultivo.js";

const router = express.Router();

// todos los cultivos
router.get("/", async (req, res) => {
  try {
    const cultivos = await Cultivo.find();
    res.json(cultivos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un cultivo
router.post("/", async (req, res) => {
  try {
    const nuevo = new Cultivo(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar un cultivo
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Cultivo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!actualizado) return res.status(404).json({ error: "Cultivo no encontrado" });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar un cultivo
router.delete("/:id", async (req, res) => {
  try {
    const eliminado = await Cultivo.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Cultivo no encontrado" });
    res.json({ message: "Cultivo eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
