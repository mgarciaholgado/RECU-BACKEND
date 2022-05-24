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
        let precioColor = super.valorCoches();
        let precioTotal = 0;
        if (this._potencia <= 300) {
            precioTotal = precioColor + 2000;
        }
        else if (this._potencia >= 300) {
            precioTotal = precioColor + 4000;
        }
        return (precioTotal);
    }
}
exports.Deportivo = Deportivo;
