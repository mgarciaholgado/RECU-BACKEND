"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleados = void 0;
const mongoose_1 = require("mongoose");
const empleadoSchema = new mongoose_1.Schema({
    _dni: {
        type: String,
    },
    _nombre: {
        type: String,
    },
    _tipoEmpleado: {
        type: String,
    },
    _fechaContratacion: {
        type: Date,
    },
    _sueldoMes: {
        type: Number
    },
    _horasExtra: {
        type: Number
    },
    _empresaContratista: {
        type: String
    }
});
exports.Empleados = (0, mongoose_1.model)("empleados", empleadoSchema);
