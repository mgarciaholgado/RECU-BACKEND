"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, tipoEmpleado, fechaContratacion, sueldoMes) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
        this._fechaContratacion = fechaContratacion;
        this._sueldoMes = sueldoMes;
    }
    //     GETTERS AND SETTERS      //
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get tipoEmpleado() {
        return this._tipoEmpleado;
    }
    get fechaContratacion() {
        return this._fechaContratacion;
    }
    get sueldoMes() {
        return this._sueldoMes;
    }
}
exports.Empleado = Empleado;
