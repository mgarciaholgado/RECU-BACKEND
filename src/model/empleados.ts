import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
  _dni: {
    type: String,
    },
  _nombre: {
    type: String,
  },
  _tipoEmpleado: {
    type: String,
  },
  _fechaContratacion:{
      type: Date,
  },
  _sueldoMes:{
    type: Number
  },
  _horasExtra:{
    type: Number
  },
  _empresaContratista:{
    type: String
  }
  
});

export type tMecanico = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
};

export type tPintor = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _precioHora: number;
  };

export const Empleados = model("empleados", empleadoSchema);


