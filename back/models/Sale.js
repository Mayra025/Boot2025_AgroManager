import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    client: { type: String, required: true },
    quantity: { type: String, required: true }, // ej: "500 litros"
    price: { type: Number, required: true },    // numérico
    total: { type: Number, required: true },    // numérico
    date: { type: Date, default: Date.now },
    paymentMethod: { type: String, enum: ["Transferencia", "Efectivo", "Cheque", "Tarjeta"] },
    status: { type: String, enum: ["Pagado", "Pendiente", "Enviado"], default: "Pendiente" }
  },
  { timestamps: true }
);

export default mongoose.model("Sale", SaleSchema);
