"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoTerreno = void 0;
const vehiculo_1 = require("./vehiculo");
class todoTerreno extends vehiculo_1.Vehiculo {
    constructor(DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo, traccion) {
        super(DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo);
        this._traccion = traccion;
    }
    //     GETTERS AND SETTERS      //
    get traccion() {
        return this._traccion;
    }
    valorCoches() {
        let precioBase = super.valorCoches();
        let precioT = 0;
        if (this._traccion == "4x4") {
            precioT = precioBase + 350;
        }
        else if (this._traccion == "AWD") {
            precioT = precioBase + 500;
        }
        return (precioT);
    }
}
exports.todoTerreno = todoTerreno;
