export abstract class Empleado {
    private _dni: string; 
    private _nombre: string;
    private _tipoEmpleado: string;
    private _fechaContratacion: Date;
    private _sueldoMes: number;



    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, sueldoMes:number) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
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
    get tipoEmpleado() {
        return this._tipoEmpleado
    }
    get fechaContratacion(){
        return this._fechaContratacion
    }

    get sueldoMes(){
        return this._sueldoMes
    }
}