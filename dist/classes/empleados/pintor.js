"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pintor = void 0;
const empleado_1 = require("./empleado");
class Pintor extends empleado_1.Empleado {
    constructor(dni, nombre, tipoEmpleado, fechaContratacion, precioHora) {
        super(dni, nombre, tipoEmpleado, fechaContratacion);
        this._precioHora = precioHora;
    }
    //     GETTERS AND SETTERS      //
    get precioHora() {
        return this._precioHora;
    }
}
exports.Pintor = Pintor;
