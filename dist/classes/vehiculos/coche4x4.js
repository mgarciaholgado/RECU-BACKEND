"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
const vehiculo_1 = require("./vehiculo");
class Coche extends vehiculo_1.Vehiculo {
    constructor(id, nombre, sueldo, tipoEmpleado, tipoMec, horasExtras) {
        super(id, nombre, sueldo, tipoEmpleado);
        this._tipoMec = tipoMec;
        this._horasExtra = horasExtras;
    }
    //     GETTERS AND SETTERS      //
    get tipoMec() {
        return this._tipoMec;
    }
    get horasExtra() {
        return this._horasExtra;
    }
}
exports.Coche = Coche;
