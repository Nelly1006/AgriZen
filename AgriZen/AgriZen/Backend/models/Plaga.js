import mongoose from "mongoose";

const plagaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export default mongoose.model("Plaga", plagaSchema);
