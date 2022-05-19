import { Vehiculo } from "./vehiculo";
import { Reparacion } from "../reparacion/reparacion";

export class Deportivo extends Vehiculo {
    private _potencia: number;

    constructor(DNIpropietario: string, matricula: string, marca: string, modelo: string ,color: string, precio: number,tipoVehiculo:string, potencia:number) {
        
        super(DNIpropietario,matricula, marca, modelo, color, precio, tipoVehiculo);
        this._potencia = potencia;
    }

    //     GETTERS AND SETTERS      //

    get potenciaM(){
        return this._potencia
    }

    override valorCoches():number{
        let precioBase: number = super.valorCoches();
        let precioT = 0
        if (this._potencia <= 200) {
            precioT = precioBase + 200
        }else if (this._potencia >=400) {
            precioT = precioBase + 400
        }
        return Math.round(precioT)
       }

}