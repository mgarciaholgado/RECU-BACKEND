"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
    usuario: {
        type: String,
    },
    contraseña: {
        type: String,
    }
});
exports.Usuario = (0, mongoose_1.model)("usuarios", vehiculoSchema);
