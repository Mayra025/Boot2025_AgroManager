import express from "express";
import Actividad from "../models/Actividad.js";

const router = express.Router();

// GET todas las actividades
router.get("/", async (req, res) => {
    try {
        const actividades = await Actividad.find();
        res.json(actividades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST nueva actividad
router.post("/", async (req, res) => {
    try {
        const nueva = new Actividad(req.body);
        await nueva.save();
        res.status(201).json(nueva);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT actualizar actividad
router.put("/:id", async (req, res) => {
    try {
        const act = await Actividad.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!act) return res.status(404).json({ error: "No encontrada" });
        res.json(act);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE eliminar actividad
router.delete("/:id", async (req, res) => {
    try {
        const act = await Actividad.findByIdAndDelete(req.params.id);
        if (!act) return res.status(404).json({ error: "No encontrada" });
        res.json({ message: "Actividad eliminada", id: req.params.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
