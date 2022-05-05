import { Empleado } from "./empleado";

export class Mecanico extends Empleado {
   private _sueldoMes:number;


    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, sueldoMes:number) {
        
        super(dni,nombre,tipoEmpleado,fechaContratacion);
        this._sueldoMes = sueldoMes;
    }

    //     GETTERS AND SETTERS      //

    get sueldoMes(){
        return this._sueldoMes
    }
}