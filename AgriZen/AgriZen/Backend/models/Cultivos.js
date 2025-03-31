import mongoose from "mongoose";

const cultivoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  fecha_siembra: { type: Date, required: true },
  id_suelo: { type: mongoose.Schema.Types.ObjectId, ref: "Suelo", required: true },
});

export default mongoose.model("Cultivo", cultivoSchema);
