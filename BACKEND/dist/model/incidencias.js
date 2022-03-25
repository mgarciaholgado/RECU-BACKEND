"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incidencias = void 0;
const mongoose_1 = require("mongoose");
const incidenciasSchema = new mongoose_1.Schema({
    _idIncidencia: {
        type: String,
        required: true,
        unique: true
    },
    _idEmpleado: {
        type: Number
    },
    _Matricula: {
        type: String
    },
    _Fecha: {
        type: Date,
    },
    _Reparaciones: {
        type: Array
    }
});
exports.Incidencias = (0, mongoose_1.model)("incidencias", incidenciasSchema);
