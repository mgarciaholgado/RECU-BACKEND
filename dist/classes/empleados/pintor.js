"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pintor = void 0;
const empleado_1 = require("./empleado");
class Pintor extends empleado_1.Empleado {
    constructor(dni, nombre, fechaContratacion, sueldoMes, empresaContratista) {
        super(dni, nombre, fechaContratacion, sueldoMes);
        this._empresaContratista = empresaContratista;
    }
    //     GETTERS AND SETTERS      //
    get empresaContratista() {
        return this._empresaContratista;
    }
}
exports.Pintor = Pintor;
