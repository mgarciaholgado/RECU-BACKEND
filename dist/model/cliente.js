"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const mongoose_1 = require("mongoose");
const clienteSchema = new mongoose_1.Schema({
    _dni: {
        type: String,
    },
    _nombre: {
        type: String,
    },
    _telefono: {
        type: String,
    },
});
exports.Clientes = (0, mongoose_1.model)("clientes", clienteSchema);
