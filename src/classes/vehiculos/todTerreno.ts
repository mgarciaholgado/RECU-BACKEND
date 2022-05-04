import { Vehiculo } from "./vehiculo";

export class todoTerreno extends Vehiculo {
    private _traccion: string;

    constructor(DNIpropietario:string,matricula: string, marca: string, color: string, precio: string,tipoVehiculo:string, traccion:string) {
        
        super(DNIpropietario,matricula, marca, color, tipoVehiculo);
        this._traccion = traccion;
    }

    //     GETTERS AND SETTERS      //

    get traccion(){
        return this._traccion
    }

}