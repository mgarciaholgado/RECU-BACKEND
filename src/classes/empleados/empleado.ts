export abstract class Empleado {
    private _dni: string; 
    private _nombre: string;
    private _tipoEmpleado: string;
    private _fechaContratacion: Date;



    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
        this._fechaContratacion = fechaContratacion;
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
}