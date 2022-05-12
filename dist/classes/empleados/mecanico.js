"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
const empleado_1 = require("./empleado");
class Mecanico extends empleado_1.Empleado {
    constructor(dni, nombre, fechaContratacion, sueldoMes, horasExtra) {
        super(dni, nombre, fechaContratacion, sueldoMes);
        this._horasExtra = horasExtra;
    }
    //     GETTERS AND SETTERS      //
    get horasExtra() {
        return this._horasExtra;
    }
    calcularSueldoAño() {
        let sueldoAño = super.calcularSueldoAño();
        let calculoHoras = this.horasExtra * 20;
        let salarioTotal = sueldoAño + calculoHoras;
        return Math.round(salarioTotal);
    }
}
exports.Mecanico = Mecanico;
