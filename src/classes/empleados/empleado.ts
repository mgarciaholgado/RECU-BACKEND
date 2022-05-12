export abstract class Empleado {
    private _dni: string; 
    private _nombre: string;
    private _fechaContratacion: Date;
    private _sueldoMes: number;



    constructor(dni: string, nombre: string, fechaContratacion: Date, sueldoMes:number) {
        this._dni = dni;
        this._nombre = nombre;
        this._fechaContratacion = fechaContratacion;
        this._sueldoMes = sueldoMes
    }

    //     GETTERS AND SETTERS      //

    get dni() {
        return this._dni
    }
    get nombre() {
        return this._nombre
    }
    get fechaContratacion(){
        return this._fechaContratacion
    }

    get sueldoMes(){
        return this._sueldoMes
    }

    calcularSueldoAño():number{
        let sueldo = this._sueldoMes;
        let sueldoAño = sueldo * 12
        return sueldoAño
      }
}