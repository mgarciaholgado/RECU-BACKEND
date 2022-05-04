import { Vehiculo } from "./vehiculo";

export class Deportivo extends Vehiculo {
    private _potenciaM: string;

    constructor(DNIpropietario: string, matricula: string, marca: string, color: string, precio: string,tipoVehiculo:string, pMotor:string) {
        
        super(DNIpropietario,matricula, marca, color, tipoVehiculo);
        this._potenciaM = pMotor;
    }

    //     GETTERS AND SETTERS      //

    get potencia(){
        return this._potenciaM
    }

}