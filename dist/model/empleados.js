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
    _password: {
        type: String,
    },
    _tipoEmpleado: {
        type: String,
    },
    _empresaContratista: {
        type: String,
    },
    _horasExtra: {
        type: Number,
    }
});
exports.Empleados = (0, mongoose_1.model)("empleados", empleadoSchema);
