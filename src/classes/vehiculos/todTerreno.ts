import { Vehiculo } from "./vehiculo";

export class todoTerreno extends Vehiculo {
    private _traccion: string;

    constructor(DNIpropietario:string,matricula: string, marca: string, modelo:string, color: string, precio: number,tipoVehiculo:string, traccion:string) {
        
        super(DNIpropietario,matricula, marca, modelo, color, precio, tipoVehiculo);
        this._traccion = traccion;
    }

    //     GETTERS AND SETTERS      //

    get traccion(){
        return this._traccion
    }

    override valorCoches():number{
        let precioBase: number = super.valorCoches();
        let precioT = 0
        
        if (this._traccion == "4x4") {
            precioT = precioBase + 350
        }else if (this._traccion == "AWD") {
            precioT = precioBase + 500
        }
        return (precioT)
       }

}