export  class Vehiculo {
    private _DNIpropietario: string;
    private _matricula: string; 
    private _marca: string;
    private _color: string;
    private _tipoVehiculo: string;


    constructor(DNIpropietario: string, matricula: string, marca: string, color: string, tipoVehiculo:string) {
        this._DNIpropietario = DNIpropietario
        this._matricula = matricula;
        this._marca = marca;
        this._color = color;
        this._tipoVehiculo = tipoVehiculo
    }

    //     GETTERS AND SETTERS      //

    get DNIpropietario() {
        return this._DNIpropietario
    }

    get matricula() {
        return this._matricula
    }
    get marca() {
        return this._marca
    }
    get color() {
        return this._color
    }
    
    get tipoVehiculo(){
        return this._tipoVehiculo
    }
}