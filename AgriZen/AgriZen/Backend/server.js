import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Importar rutas
import alertasRoutes from "./routes/alertas.routes.js";
import campoRoutes from "./routes/campo.routes.js";
import cultivosRoutes from "./routes/cultivos.routes.js";
import lecturasRoutes from "./routes/lecturas.routes.js";
import plagasRoutes from "./routes/plagas.routes.js";
import sensoresRoutes from "./routes/sensores.routes.js";
import suelosRoutes from "./routes/suelos.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// Usar las rutas
app.use("/api/alertas", alertasRoutes);
app.use("/api/campos", campoRoutes);
app.use("/api/cultivos", cultivosRoutes);
app.use("/api/lecturas", lecturasRoutes);
app.use("/api/plagas", plagasRoutes);
app.use("/api/sensores", sensoresRoutes);
app.use("/api/suelos", suelosRoutes);
app.use("/api/usuarios", usuariosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
