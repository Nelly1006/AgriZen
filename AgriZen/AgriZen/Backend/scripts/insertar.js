import dotenv from "dotenv";
import mongoose from "mongoose";

// Importar modelos
import Cultivo from "../models/Cultivos.js";
import Plaga from "../models/Plaga.js";
import CultivoPlaga from "../models/CultivoPlaga.js";
import Suelo from "../models/Suelos.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión:", err));

const insertarDatos = async () => {
  try {
    await Suelo.deleteMany();
    await Cultivo.deleteMany();
    await Plaga.deleteMany();
    await CultivoPlaga.deleteMany();

    const suelos = await Suelo.insertMany([
      { tipo: "Arcilloso", ph: 6.5 },
      { tipo: "Arenoso", ph: 5.8 },
    ]);

    const cultivos = await Cultivo.insertMany([
      { nombre: "Maíz A", ubicacion: "Lote 1", fecha_siembra: "2024-02-15", id_suelo: suelos[0]._id },
      { nombre: "Maíz B", ubicacion: "Lote 2", fecha_siembra: "2024-03-01", id_suelo: suelos[1]._id },
    ]);

    const plagas = await Plaga.insertMany([
      { nombre: "Hormigas", descripcion: "Insectos que afectan raíces y tallos." },
      { nombre: "Gusanos", descripcion: "Larvas que se alimentan de hojas y frutos." },
      { nombre: "Pulgones", descripcion: "Pequeños insectos que chupan la savia de las plantas." },
    ]);

    await CultivoPlaga.insertMany([
      { id_cultivo: cultivos[0]._id, id_plaga: plagas[0]._id },
      { id_cultivo: cultivos[0]._id, id_plaga: plagas[1]._id },
      { id_cultivo: cultivos[1]._id, id_plaga: plagas[2]._id },
    ]);

    console.log("✅ Datos insertados correctamente");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error al insertar datos:", error);
    mongoose.connection.close();
  }
};

// Ejecutar la inserción
insertarDatos();
