import { Empleado } from "./empleado";

export class Pintor extends Empleado {
    public _empresaContratista: number;
    
  
    constructor(dni: string, nombre: string, fechaContratacion: Date,sueldoMes:number ,empresaContratista:number) {
        super(dni,nombre,fechaContratacion, sueldoMes);
        this._empresaContratista = empresaContratista;
    }
  
    //     GETTERS AND SETTERS      //
  
    get empresaContratista() {
        return this._empresaContratista
    }
  
    
    
  }
