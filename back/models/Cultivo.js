import mongoose from "mongoose";

const CultivoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    variedad: { type: String },
    estado: {
        text: { type: String, default: "Siembra" },
        color: { type: String, default: "bg-blue-100 text-blue-600" },
    },
    parcela: { type: String },
    hectareas: { type: Number },
    siembra: { type: Date },
    cosecha: { type: Date },
    nota: { type: String },
}, { timestamps: true });

export default mongoose.model("Cultivo", CultivoSchema);
