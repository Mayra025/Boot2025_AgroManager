import mongoose from "mongoose";

const actividadSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  estado: { 
    type: String, 
    enum: ["Programado", "Pendiente", "Completado"], 
    default: "Programado" 
  },
  cultivo: { type: String, required: true },
  parcela: { type: String, required: true },
  fecha: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model("Actividad", actividadSchema);
