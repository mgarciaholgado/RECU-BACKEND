"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const mongoose_1 = require("mongoose");
const clientesSchema = new mongoose_1.Schema({
    _dni: {
        type: String,
        required: true,
        unique: true
    },
    _nombre: {
        type: String
    },
    _telefono: {
        type: Number
    },
    _correo: {
        type: Number,
    }
});
exports.Clientes = (0, mongoose_1.model)("clientes", clientesSchema);
