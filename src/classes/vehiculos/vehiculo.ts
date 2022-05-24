export  class Vehiculo {
    private _DNIpropietario: string;
    private _matricula: string; 
    private _marca: string;
    private _modelo: string;
    private _color: string;
    private _precio: number;
    private _tipoVehiculo: string;


    constructor(DNIpropietario: string, matricula: string, marca: string, modelo: string, color: string, precio: number,tipoVehiculo:string) {
        this._DNIpropietario = DNIpropietario
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo
        this._color = color;
        this._precio = precio;
        this._tipoVehiculo = tipoVehiculo;
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

    get modelo() {
        return this._modelo
    }

    get color() {
        return this._color
    }

    get precio(){
        return this._precio
    }
    
    get tipoVehiculo(){
        return this._tipoVehiculo
    }

    valorCoches():number{
        let precioB = this._precio
        let vuelta = 0

        switch (this._color) {
            case 'Azul':
              vuelta = precioB + 500
              break;

            case 'Verde':
                vuelta = precioB + 800
              break;

            case 'Rojo':
                vuelta = precioB + 1000
              break;

            default:
              vuelta = precioB
          }

        return (vuelta)
    }
}