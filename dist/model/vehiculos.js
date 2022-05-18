"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
    _DNIpropietario: {
        type: String
    },
    _matricula: {
        type: String,
    },
    _marca: {
        type: String,
    },
    _modelo: {
        type: String,
    },
    _color: {
        type: String,
    },
    _precio: {
        type: Number,
    },
    _tipoVehiculo: {
        type: String,
    },
});
exports.Vehiculos = (0, mongoose_1.model)("vehiculos", vehiculoSchema);
