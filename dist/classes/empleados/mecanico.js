"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
const empleado_1 = require("./empleado");
class Mecanico extends empleado_1.Empleado {
    constructor(dni, nombre, tipoEmpleado, fechaContratacion, sueldoMes) {
        super(dni, nombre, tipoEmpleado, fechaContratacion);
        this._sueldoMes = sueldoMes;
    }
    //     GETTERS AND SETTERS      //
    get sueldoMes() {
        return this._sueldoMes;
    }
}
exports.Mecanico = Mecanico;
