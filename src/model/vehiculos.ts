import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
  _DNIpropietario:{
    type:String
  },
  _matricula: {
  type: String,
    },
  _marca: {
    type: String,
  },
  _color: {
    type: String,
  },
  _tipoVehiculo: {
    type: String,
  },
  
  
});
export const Vehiculos = model("vehiculos", vehiculoSchema);

export type tMoto = {
  _matricula: string;
  _nombre: string;
  _sueldo: number;
  _tipoEmpleado: string;
  _tipoMec: string;
  _horasExtra: number;
};

export type tCoche = {
    _id: string;
    _nombre: string;
    _sueldo: number;
    _tipoEmpleado: string;
    _empresaContratista: string;
  };

  export type tVehiculo = {
    
    _matricula: string;
    _marca: string;
    _color: string;
    _tipoVehiculo: string;
  };

  export type tVehiculo2 = {
    
    _matricula: string | null;
    _marca: string | null;
    _color: string | null;
    _tipoVehiculo: string | null;
  };