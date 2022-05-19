"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deportivo = void 0;
const vehiculo_1 = require("./vehiculo");
class Deportivo extends vehiculo_1.Vehiculo {
    constructor(DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo, potencia) {
        super(DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo);
        this._potencia = potencia;
    }
    //     GETTERS AND SETTERS      //
    get potenciaM() {
        return this._potencia;
    }
    valorCoches() {
        let precioBase = super.valorCoches();
        let precioT = 0;
        if (this._potencia <= 200) {
            precioT = precioBase + 200;
        }
        else if (this._potencia >= 400) {
            precioT = precioBase + 400;
        }
        return Math.round(precioT);
    }
}
exports.Deportivo = Deportivo;
