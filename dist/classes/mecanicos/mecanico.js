"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
class Mecanico {
    constructor(id, nombre, sueldo, tipoMec) {
        this._id = id;
        this._nombre = nombre;
        this._sueldo = sueldo;
        this._tipoMec = tipoMec;
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
    get tipoMec() {
        return this._tipoMec;
    }
}
exports.Mecanico = Mecanico;
