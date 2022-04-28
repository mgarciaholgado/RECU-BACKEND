export class Cliente {
    private _dni: string; 
    private _nombre: string;
    private _telefono: number;

    constructor(dni: string, nombre: string, telefono: number) {
        this._dni = dni;
        this._nombre = nombre;
        this._telefono = telefono;
    }

    //     GETTERS AND SETTERS      //

    get dni() {
        return this._dni
    }
    get nombre() {
        return this._nombre
    }
    get telefono(){
        return this._telefono
    }
}