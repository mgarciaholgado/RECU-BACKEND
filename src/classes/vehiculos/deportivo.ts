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
        let precioColor: number = super.valorCoches();
        let precioTotal = 0
        if ( this._potencia <= 300) {
            precioTotal = precioColor + 2000
        }else if (this._potencia >=300 ) {
            precioTotal = precioColor + 4000
        }
        return (precioTotal)
       }

}