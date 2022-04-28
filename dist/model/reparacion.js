"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparaciones = void 0;
const mongoose_1 = require("mongoose");
const reparacionesSchema = new mongoose_1.Schema({
    _codReparacion: {
        type: Number,
    },
    _matricula: {
        type: String,
    },
    _nombreReparacion: {
        type: String
    },
    _CosteBase: {
        type: Number
    }
});
exports.Reparaciones = (0, mongoose_1.model)("reparaciones", reparacionesSchema);
