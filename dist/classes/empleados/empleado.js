"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, fechaContratacion, sueldoMes) {
        this._dni = dni;
        this._nombre = nombre;
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
    get fechaContratacion() {
        return this._fechaContratacion;
    }
    get sueldoMes() {
        return this._sueldoMes;
    }
    calcularSueldoAño() {
        let sueldo = this._sueldoMes;
        let sueldoAño = sueldo * 12;
        return sueldoAño;
    }
}
exports.Empleado = Empleado;
