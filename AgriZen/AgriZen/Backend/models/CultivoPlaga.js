import mongoose from "mongoose";

const cultivoPlagaSchema = new mongoose.Schema({
  id_cultivo: { type: mongoose.Schema.Types.ObjectId, ref: "Cultivo", required: true },
  id_plaga: { type: mongoose.Schema.Types.ObjectId, ref: "Plaga", required: true },
});

export default mongoose.model("CultivoPlaga", cultivoPlagaSchema);
