"use strict";
//  SUBCLASE ESPECIALISTA EN MOTOS  //
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
class Mecanico {
    constructor(id, nombre, sueldo) {
        this._id = id;
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    //     GETTERS AND SETTERS      //
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get sueldo() {
        return this._sueldo;
    }
}
exports.Mecanico = Mecanico;
