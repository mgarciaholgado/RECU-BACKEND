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
  _modelo: {
    type: String,
  },
  _color: {
    type: String,
  },
  _precio: {
    type: Number,
  },
  _tipoVehiculo: {
    type: String,
  },
  _potencia: {
    type: Number,
  },
  _traccion: {
    type: String,
  },
  
  
});
export const Vehiculos = model("vehiculos", vehiculoSchema);

  export type tVehiculo = {
    _DNIpropietario: string;
    _matricula: string;
    _marca: string;
    _modelo: string;
    _color: string;
    _precio: number;
    _tipoVehiculo: string;
    _potencia:number,
    _traccion: string;
  };

  export type tValor = {
    _matricula: string | null;
    _tipoVehiculo: string | null;
    _marca: string | null;
    _modelo: string | null;
    _valor: number | null;
  }

