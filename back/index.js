import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import actividadRoutes from "./routes/actividad.routes.js"
import cultivoRoutes from "./routes/cultivos.routes.js"
import salesRoutes from "./routes/sales.js";
import inventoryRoutes from "./routes/inventory.js";
import animalRoutes from "./routes/animals.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api/sales", salesRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/cultivos", cultivoRoutes);

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Start
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`API lista en :${PORT}`));
});
