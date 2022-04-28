import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
  _dni: {
    type: String,
    },
  _nombre: {
    type: String,
  },
  _password: {
    type: String,
  },
  _tipoEmpleado: {
    type: String,
  },
  _empresaContratista: {
    type: String,
  },
  _horasExtra:{
      type: Number,
  }
  
  
});
export const Empleados = model("empleados", empleadoSchema);

export type tMecanico = {
  _dni: string;
  _nombre: string;
  _password: number;
  _tipoEmpleado: string;
};

export type tLimpiador = {
    _dni: string;
    _nombre: string;
    _sueldo: number;
    _tipoEmpleado: string;
  };


