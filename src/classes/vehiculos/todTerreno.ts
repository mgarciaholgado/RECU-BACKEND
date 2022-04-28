import { Vehiculo } from "./vehiculo";

export class todoTerreno extends Vehiculo {
    private _traccion: string;

    constructor(matricula: string, marca: string, color: string, precio: string,tipoVehiculo:string, traccion:string) {
        
        super(matricula, marca, color, tipoVehiculo);
        this._traccion = traccion;
    }

    //     GETTERS AND SETTERS      //

    get traccion(){
        return this._traccion
    }

}