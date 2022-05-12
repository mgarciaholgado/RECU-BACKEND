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
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
  _empresaContratista:string;
};

export type tEmpleado2 = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
  _empresaContratista:string;
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
  _sueldoMes: number;
  _empresaContratista:string;
  };

  export type tSalario = {
    _dni: string | null;
    _nombre: string | null;
   _sueldoTotal: number | null;
    
    };  

    export type tSalario2 = {
      _dni: string | null;
      _nombre: string | null;
     _sueldoTotal: Number | null;
      
      }; 

export const Empleados = model("empleados", empleadoSchema);


