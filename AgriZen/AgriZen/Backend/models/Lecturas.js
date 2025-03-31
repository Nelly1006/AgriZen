import mongoose from "mongoose";

const lecturaSchema = new mongoose.Schema({
  sensor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sensor', // Referencia al modelo Sensor
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  // Otros campos según sea necesario
});

const Lectura = mongoose.model("Lectura", lecturaSchema);

export default Lectura; // Asegúrate de exportarlo con "export default"
