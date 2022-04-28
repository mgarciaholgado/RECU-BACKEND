"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, telefono, sueldo) {
        this._dni = dni;
        this._nombre = nombre;
        this._telefono = telefono;
        this._sueldo = sueldo;
    }
    //     GETTERS AND SETTERS      //
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get sueldo() {
        return this._sueldo;
    }
    get telefono() {
        return this._telefono;
    }
}
exports.Empleado = Empleado;
