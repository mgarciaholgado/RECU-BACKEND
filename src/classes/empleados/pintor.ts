import { Empleado } from "./empleado";

export class Pintor extends Empleado {
   private _precioHora: Number;
    

    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, precioHora:number) {
        super(dni,nombre,tipoEmpleado,fechaContratacion);
        this._precioHora = precioHora;
    }

    //     GETTERS AND SETTERS      //

    get precioHora() {
        return this._precioHora
    }
    
}
