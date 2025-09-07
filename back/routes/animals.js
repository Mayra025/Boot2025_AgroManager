// import { Router } from "express";
// import { listGroups, createGroup, updateGroup, deleteGroup } from "../controllers/animalController.js";
// const router = Router();

// router.get("/", listGroups);
// router.post("/", createGroup);
// router.put("/:id", updateGroup);
// router.delete("/:id", deleteGroup);

// export default router;

import express from "express";
import AnimalGroup from "../models/AnimalGroup.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const animals = await AnimalGroup.find();
  res.json(animals);
});

router.post("/", async (req, res) => {
  try {
    const group = new AnimalGroup(req.body);
    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
