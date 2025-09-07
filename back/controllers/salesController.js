import Sale from "../models/Sale.js";

export const listSales = async (req, res) => {
  const sales = await Sale.find().sort({ createdAt: -1 });
  res.json(sales);
};

export const createSale = async (req, res) => {
  const sale = new Sale(req.body);
  await sale.save();
  res.status(201).json(sale);
};

export const getSale = async (req, res) => {
  const sale = await Sale.findById(req.params.id);
  if (!sale) return res.status(404).json({ message: "Venta no encontrada" });
  res.json(sale);
};

export const updateSale = async (req, res) => {
  const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!sale) return res.status(404).json({ message: "Venta no encontrada" });
  res.json(sale);
};

export const deleteSale = async (req, res) => {
  const sale = await Sale.findByIdAndDelete(req.params.id);
  if (!sale) return res.status(404).json({ message: "Venta no encontrada" });
  res.json({ message: "Venta eliminada" });
};
