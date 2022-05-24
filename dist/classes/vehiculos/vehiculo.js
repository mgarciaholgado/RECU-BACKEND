"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo) {
        this._DNIpropietario = DNIpropietario;
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._precio = precio;
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
    get modelo() {
        return this._modelo;
    }
    get color() {
        return this._color;
    }
    get precio() {
        return this._precio;
    }
    get tipoVehiculo() {
        return this._tipoVehiculo;
    }
    valorCoches() {
        let precioB = this._precio;
        let vuelta = 0;
        switch (this._color) {
            case 'Azul':
                vuelta = precioB + 500;
                break;
            case 'Verde':
                vuelta = precioB + 800;
                break;
            case 'Rojo':
                vuelta = precioB + 1000;
                break;
            default:
                vuelta = precioB;
        }
        return (vuelta);
    }
}
exports.Vehiculo = Vehiculo;
