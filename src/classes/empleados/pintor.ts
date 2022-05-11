import { Empleado } from "./empleado";

export class Pintor extends Empleado {
    public _empresaContratista: number;
    
  
    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date,sueldoMes:number ,empresaContratista:number) {
        super(dni,nombre,tipoEmpleado,fechaContratacion, sueldoMes);
        this._empresaContratista = empresaContratista;
    }
  
    //     GETTERS AND SETTERS      //
  
    get empresaContratista() {
        return this._empresaContratista
    }
  
    /*calcularSueldoMesPintor():number{
      let precioHora = this._precioHora;
      let salarioMes = precioHora * 28;
  
      return Math.round(salarioMes)
    }*/
    
  }
