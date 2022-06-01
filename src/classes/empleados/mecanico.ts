import { Empleado } from "./empleado";

export class Mecanico extends Empleado {
   private _horasExtra:number;


    constructor(dni: string, nombre: string,  fechaContratacion: Date, sueldoMes:number, horasExtra:number) {
        
        super(dni,nombre,fechaContratacion, sueldoMes);
        this._horasExtra = horasExtra;
    }

    //     GETTERS AND SETTERS      //

    get horasExtra(){
        return this._horasExtra
    }

    override calcularSueldoAño():number{
        let sueldoAño: number = super.calcularSueldoAño();
        let calculoHoras: number = this.horasExtra * 20
        let salarioTotal = sueldoAño + calculoHoras
        return Math.round(salarioTotal)
       }
}