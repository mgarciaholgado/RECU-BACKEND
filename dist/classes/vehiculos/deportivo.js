"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deportivo = void 0;
const vehiculo_1 = require("./vehiculo");
class Deportivo extends vehiculo_1.Vehiculo {
    constructor(DNIpropietario, matricula, marca, color, precio, tipoVehiculo, pMotor) {
        super(DNIpropietario, matricula, marca, color, tipoVehiculo);
        this._potenciaM = pMotor;
    }
    //     GETTERS AND SETTERS      //
    get potencia() {
        return this._potenciaM;
    }
}
exports.Deportivo = Deportivo;
