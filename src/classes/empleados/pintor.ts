import { Empleado } from "./empleado";

export class Pintor extends Empleado {
    public _empresaContratista: string;
    
  
    constructor(dni: string, nombre: string, fechaContratacion: Date,sueldoMes:number ,empresaContratista:string) {
        super(dni,nombre,fechaContratacion, sueldoMes);
        this._empresaContratista = empresaContratista;
    }
  
    //     GETTERS AND SETTERS      //
  
    get empresaContratista() {
        return this._empresaContratista
    }
  
    override calcularSueldoAño():number{
        let sueldoAño: number = super.calcularSueldoAño();
        if (this._empresaContratista == 'CEYDE PINTORES') {
            sueldoAño = sueldoAño + 350
        }else if (this._empresaContratista == 'PINTURAS SEVILLA'){
            sueldoAño = sueldoAño + 100
        }else if(this._empresaContratista == 'BENITO BRICOMARK'){
            sueldoAño = sueldoAño + 350
        }
        return Math.round(sueldoAño)
       }
    
  }
