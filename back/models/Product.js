import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    currentStock: { type: Number, default: 0 },
    unit: { type: String, required: true }, // kg, litros, sacos...
    minStock: { type: Number, default: 0 },
    maxStock: { type: Number, default: 0 },
    unitCost: { type: Number, default: 0 },
    deposit: { type: String },
    supplier: { type: String },
    status: { type: String, enum: ["low", "normal"], default: "normal" }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
