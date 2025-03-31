import mongoose from "mongoose";

const sueloSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  ph: { type: Number, required: true },
});

export default mongoose.model("Suelo", sueloSchema);
