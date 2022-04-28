export  class Vehiculo {
    private _matricula: string; 
    private _marca: string;
    private _color: string;
    private _tipoVehiculo: string;


    constructor(matricula: string, marca: string, color: string, tipoVehiculo:string) {
        this._matricula = matricula;
        this._marca = marca;
        this._color = color;
        this._tipoVehiculo = tipoVehiculo
    }

    //     GETTERS AND SETTERS      //

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