import mongoose from "mongoose";

const alertaSchema = new mongoose.Schema({
  tipo_alerta: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  nivel_gravedad: {
    type: String,
    enum: ['Bajo', 'Medio', 'Alto'],
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

// Se exporta el modelo con export default
const Alerta = mongoose.model("Alerta", alertaSchema);
export default Alerta;
