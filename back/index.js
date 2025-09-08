// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import { connectDB } from "./config/db.js";
// import authRoutes from "./routes/auth.routes.js";
// import actividadRoutes from "./routes/actividad.routes.js"
// import cultivoRoutes from "./routes/cultivos.routes.js"
// import salesRoutes from "./routes/sales.js";
// import inventoryRoutes from "./routes/inventory.js";
// import animalRoutes from "./routes/animals.js";
// import inicioRoutes from "./routes/inicio.routes.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";

// const app = express();

// // Middlewares
// app.use(
//   cors({
//     origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(morgan("dev"));

// // Rutas
// // app.use("/api/sales", salesRoutes);
// // app.use("/api/inventory", inventoryRoutes);
// // app.use("/api/animals", animalRoutes);
// // app.use("/api/auth", authRoutes);
// // app.use("/api/actividades", actividadRoutes);
// // app.use("/api/cultivos", cultivoRoutes);
// // app.use("/api/inicio", inicioRoutes);

// // Healthcheck
// app.get("/health", (_req, res) => res.json({ ok: true }));



// // __dirname usando ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const frontendDist = path.join(__dirname, "../front/dist");
// if (fs.existsSync(frontendDist)) {
//   app.use(express.static(frontendDist));
//   app.get("*", (_req, res) => {
//     res.sendFile(path.resolve(frontendDist, "index.html"));
//   });
// } else {
//   console.log("⚠️ Frontend dist folder no existe, omitiendo serve-static");
// }


// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "front/dist/index.html"));
// });

// // Start
// const PORT = process.env.PORT || 4000;
// connectDB().then(() => {
//   app.listen(PORT, () => console.log(`API lista en :${PORT}`));
// });


// back/index.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import actividadRoutes from "./routes/actividad.routes.js";
import cultivoRoutes from "./routes/cultivos.routes.js";
import salesRoutes from "./routes/sales.js";
import inventoryRoutes from "./routes/inventory.js";
import animalRoutes from "./routes/animals.js";
import inicioRoutes from "./routes/inicio.routes.js";

const app = express();

// -----------------------
// Middlewares
// -----------------------
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// -----------------------
// Rutas API
// -----------------------
app.use("/api/sales", salesRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/cultivos", cultivoRoutes);
app.use("/api/inicio", inicioRoutes);

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// -----------------------
// Servir Frontend (Vite) en producción
// -----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendDist = path.join(__dirname, "../front/dist");

// Solo servir frontend si existe
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));

  // Todas las rutas que no empiecen con /api redirigen a index.html
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.resolve(frontendDist, "index.html"));
  });
}


// -----------------------
// Conexión a MongoDB + Start Server
// -----------------------
const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch((err) => console.error("Error conectando a MongoDB:", err));
