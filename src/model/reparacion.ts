import { Schema, model } from "mongoose";

const reparacionesSchema = new Schema({
  _codReparacion: {
        type: Number,
    },
  _matricula: {
      type: String,
  },
  _empleado: {
    type: String,
},
  _nombreReparacion: {
    type: String
  },
  _CosteBase: {
    type: Number
  }
  
});

export const Reparaciones = model("reparaciones", reparacionesSchema);