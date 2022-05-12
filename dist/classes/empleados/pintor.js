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
    calcularSueldoAño() {
        let sueldoAño = super.calcularSueldoAño();
        if (this._empresaContratista == 'CEYDE PINTORES') {
            sueldoAño = sueldoAño + 350;
        }
        else if (this._empresaContratista == 'PINTURAS SEVILLA') {
            sueldoAño = sueldoAño + 100;
        }
        else if (this._empresaContratista == 'BENITO BRICOMARK') {
            sueldoAño = sueldoAño + 350;
        }
        return Math.round(sueldoAño);
    }
}
exports.Pintor = Pintor;
