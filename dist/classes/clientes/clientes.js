"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(dni, nombre, telefono) {
        this._dni = dni;
        this._nombre = nombre;
        this._telefono = telefono;
    }
    //     GETTERS AND SETTERS      //
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get telefono() {
        return this._telefono;
    }
}
exports.Cliente = Cliente;
