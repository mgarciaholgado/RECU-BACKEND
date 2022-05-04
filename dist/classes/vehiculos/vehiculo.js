"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(DNIpropietario, matricula, marca, color, tipoVehiculo) {
        this._DNIpropietario = DNIpropietario;
        this._matricula = matricula;
        this._marca = marca;
        this._color = color;
        this._tipoVehiculo = tipoVehiculo;
    }
    //     GETTERS AND SETTERS      //
    get DNIpropietario() {
        return this._DNIpropietario;
    }
    get matricula() {
        return this._matricula;
    }
    get marca() {
        return this._marca;
    }
    get color() {
        return this._color;
    }
    get tipoVehiculo() {
        return this._tipoVehiculo;
    }
}
exports.Vehiculo = Vehiculo;
