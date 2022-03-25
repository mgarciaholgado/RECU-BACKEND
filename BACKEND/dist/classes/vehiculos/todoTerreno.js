"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoTerreno = void 0;
const vehiculo_1 = require("./vehiculo");
class todoTerreno extends vehiculo_1.Vehiculo {
    constructor(matricula, marca, color, precio, traccion) {
        super(matricula, marca, color, precio);
        this._traccion = traccion;
    }
    //     GETTERS AND SETTERS      //
    get traccion() {
        return this._traccion;
    }
}
exports.todoTerreno = todoTerreno;
