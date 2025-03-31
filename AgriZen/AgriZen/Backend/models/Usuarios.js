import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Otros campos según sea necesario
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;  // Asegúrate de exportar el modelo con `export default`
