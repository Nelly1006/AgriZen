import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  // Otros campos según sea necesario
});

const Sensor = mongoose.model("Sensor", sensorSchema);

export default Sensor;  // Asegúrate de exportar el modelo de esta manera
