// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");



// const app = express();

// // middlewares
// app.use(cors());
// app.use(express.json());

// // rutas simples
// app.get("/", (req, res) => {
//   res.send("API funcionando");
// });

// // conectar a Mongo
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB conectado");
//     app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
//   })
//   .catch((err) => console.error(err));


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import salesRoutes from "./routes/sales.js";
import inventoryRoutes from "./routes/inventory.js";
import animalRoutes from "./routes/animals.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/sales", salesRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/animals", animalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
