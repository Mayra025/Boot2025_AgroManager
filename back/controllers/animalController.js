import AnimalGroup from "../models/AnimalGroup.js";

export const listGroups = async (req, res) => {
  const groups = await AnimalGroup.find().sort({ createdAt: -1 });
  res.json(groups);
};

export const createGroup = async (req, res) => {
  const group = new AnimalGroup(req.body);
  await group.save();
  res.status(201).json(group);
};

export const updateGroup = async (req, res) => {
  const group = await AnimalGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!group) return res.status(404).json({ message: "Grupo no encontrado" });
  res.json(group);
};

export const deleteGroup = async (req, res) => {
  const group = await AnimalGroup.findByIdAndDelete(req.params.id);
  if (!group) return res.status(404).json({ message: "Grupo no encontrado" });
  res.json({ message: "Grupo eliminado" });
};
