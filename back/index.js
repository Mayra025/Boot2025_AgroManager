require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas simples
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// conectar a Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
  })
  .catch((err) => console.error(err));
