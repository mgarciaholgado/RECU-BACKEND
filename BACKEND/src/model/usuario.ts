import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
  usuario: {
  type: String,
    },
  contraseña: {
    type: String,
  }
  
});
export const Usuario = model("usuarios", vehiculoSchema);