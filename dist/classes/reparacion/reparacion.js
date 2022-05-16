"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparacion = void 0;
class Reparacion {
    constructor(codReparacion, matricula, nombreReparacion, costeBase) {
        this._codReparacion = codReparacion;
        this._matricula = matricula;
        this._nombreReparacion = nombreReparacion;
        this._CosteBase = costeBase;
    }
    //     GETTERS AND SETTERS      //
    get matricula() {
        return this._matricula;
    }
    get codReparacion() {
        return this._codReparacion;
    }
    get nombre() {
        return this._nombreReparacion;
    }
    get costeBase() {
        return this._CosteBase;
    }
}
exports.Reparacion = Reparacion;
