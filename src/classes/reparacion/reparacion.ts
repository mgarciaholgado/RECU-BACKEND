export class Reparacion {
    private _codReparacion: number; 
    private _matricula: string;
    private _nombreReparacion: string;
    private _CosteBase: number;


    constructor(codReparacion:number,matricula:string, nombreReparacion:string,costeBase:number) {
        this._codReparacion = codReparacion;
        this._matricula = matricula;
        
        this._nombreReparacion = nombreReparacion;
        this._CosteBase = costeBase;
    }

    //     GETTERS AND SETTERS      //

    get matricula() {
        return this._matricula
    }

  
    get codReparacion() {
        return this._codReparacion
    }
    get nombre() {
        return this._nombreReparacion
    }
    
    get costeBase(){
        return this._CosteBase
    }
}