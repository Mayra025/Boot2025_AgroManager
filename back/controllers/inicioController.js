import Cultivo from "../models/Cultivo.js";
import Animal from "../models/AnimalGroup.js";
import Stock from "../models/Product.js";
import Venta from "../models/Sale.js";
import Actividad from "../models/Actividad.js";
// import Alerta from "../models/Alerta.js";

export const getDashboardData = async (req, res) => {
  try {
    // Conteos y métricas
    const totalCultivos = await Cultivo.countDocuments();
    const totalAnimales = await Animal.countDocuments();
    const totalStock = await Stock.aggregate([{ $group: { _id: null, total: { $sum: "$cantidad" } } }]);
    const totalVentas = await Venta.aggregate([{ $group: { _id: null, total: { $sum: "$monto" } } }]);

    // Actividades recientes
    const activities = await Actividad.find().sort({ createdAt: -1 }).limit(5);

    // Alertas activas
    // const alerts = await Alerta.find().sort({ fecha: 1 }).limit(5);

    // Progreso (ejemplo: calculado según avances en cada cultivo o producción)
    const progress = [
      { id: 1, label: "Cultivo de Maíz", value: 75, color: "bg-yellow-500" },
      { id: 2, label: "Producción de Leche", value: 92, color: "bg-green-600" },
      { id: 3, label: "Cría de Pollos", value: 58, color: "bg-blue-600" },
    ];

    res.json({
      crops: { value: totalCultivos, change: "+2 este mes" },
      animals: { value: totalAnimales, change: "+15 este mes" },
      stock: { value: totalStock[0]?.total || 0, change: "-3% vs mes anterior" },
      sales: { value: totalVentas[0]?.total || 0, change: "+12% vs mes anterior" },
      activities,
    //   alerts,
      progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error obteniendo datos del dashboard" });
  }
};
