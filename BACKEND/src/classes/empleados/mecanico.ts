import { Empleado } from "./empleado";

export class Mecanico extends Empleado {
    _tipoMec: string;
    _horasExtra: Number;


    constructor(dni: string, nombre: string, telefono: number, sueldo: number, tipoMec:string, horasExtras:number) {
        
      
      
        super(dni,nombre,telefono,sueldo);
        this._tipoMec = tipoMec;
        this._horasExtra = horasExtras;
    }

    //     GETTERS AND SETTERS      //

    get tipoMec(){
        return this._tipoMec
    }

    get horasExtra(){
        return this._horasExtra
    }
}