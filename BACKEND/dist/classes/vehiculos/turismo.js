"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turismo = void 0;
const vehiculo_1 = require("./vehiculo");
class Turismo extends vehiculo_1.Vehiculo {
    constructor(matricula, marca, color, precio, pMotor) {
        super(matricula, marca, color, precio);
        this._potenciaMotor = pMotor;
    }
    //     GETTERS AND SETTERS      //
    get traccion() {
        return this._potenciaMotor;
    }
}
exports.Turismo = Turismo;
