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

export type tEmpleado = {
  _dni: string | null;
  _nombre: string | null;
  _tipoEmpleado: string | null;
  _fechaContratacion: Date | null;
  _sueldoMes: number | null;
  _horasExtra: number | null;
  _empresaContratista:number | null;
};

export type tEmpleado2 = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
  _empresaContratista:number;
};

export type tMecanico = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
};

export type tMecanico2 = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
};

export type tPintor = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _precioHora: number;
  };

  export type tSalario = {
    _dni: string | null;
    _nombre: string | null;
   _sueldoTotal: number | null;
    
    };  

export const Empleados = model("empleados", empleadoSchema);


