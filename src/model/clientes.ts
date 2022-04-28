import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
  _dni: {
  type: String,
    },
  _nombre: {
    type: String,
  },
  _telefono: {
    type: String,
  },
});
export const Clientes = model("clientes", clienteSchema);