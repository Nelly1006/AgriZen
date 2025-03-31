import mongoose from "mongoose";

const campoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
  fecha_siembra: {
    type: Date,
    required: true,
  },
  // Aquí puedes añadir más campos si es necesario
});

// Se exporta el modelo con export default
const Campo = mongoose.model("Campo", campoSchema);

export default Campo;
