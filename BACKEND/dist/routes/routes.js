"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const empleados_1 = require("../model/empleados");
const reparacion_1 = require("../model/reparacion");
const vehiculos_1 = require("../model/vehiculos");
class IndexRoutes {
    constructor() {
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const nombre = req.params.nombre;
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleados_1.Empleados.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.agregarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { nombre, sueldo, tipoEmpleado, tipoMec, horasExtra } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _nombre: nombre,
                _sueldo: sueldo,
                _tipoEmpleado: tipoEmpleado,
                _tipoMec: tipoMec,
                _horasExtra: horasExtra,
            };
            const oSchema = new empleados_1.Empleados(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codigo, matricula, nombre, coste } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _codReparacion: codigo,
                _matricula: matricula,
                _nombreReparacion: nombre,
                _CosteBase: coste,
            };
            const oSchema = new reparacion_1.Reparaciones(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { matricula, marca, color, tipoVehiculo } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _matricula: matricula,
                _marca: marca,
                _color: color,
                _tipoVehiculo: tipoVehiculo,
            };
            const oSchema = new vehiculos_1.Vehiculos(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.modificarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const code = req.params.codigo;
            const { codigo, matricula, nombre, coste } = req.body;
            yield reparacion_1.Reparaciones.findOneAndUpdate({ _codReparacion: code }, { _codReparacion: codigo, _matricula: matricula, _nombreReparacion: nombre, _CosteBase: coste }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.modificarVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const mat = req.params.matricula;
            const { matricula, marca, color, tipoVehiculo } = req.body;
            yield vehiculos_1.Vehiculos.findOneAndUpdate({ _matricula: mat }, { _matricula: matricula, _marca: marca, _color: color, _tipoVehiculo: tipoVehiculo }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.borrarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const codigo = req.params.code;
            yield reparacion_1.Reparaciones.findOneAndDelete({ _codReparacion: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.borrarVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const matricula = req.params.matricula;
            yield vehiculos_1.Vehiculos.findOneAndDelete({ _matricula: matricula })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.listarReparaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield reparacion_1.Reparaciones.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.listarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const codigo = req.params.codigo;
            yield reparacion_1.Reparaciones.findOne({ _codReparacion: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.listarVehiculos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield vehiculos_1.Vehiculos.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.listarVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const matricula = req.params.matricula;
            yield vehiculos_1.Vehiculos.findOne({ _matricula: matricula })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.registroUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codigo, nombre, coste } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
            /*_dni: string;
                  _nombre: string;
                  _password: number;
                  _tipoEmpleado: string;*/
            };
            const oSchema = new reparacion_1.Reparaciones(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    routes() {
        // POST
        this._router.post("/empleados", this.agregarEmpleado);
        this._router.post("/register", this.registroUser);
        this._router.post("/addReparacion", this.agregarReparacion);
        this._router.post("/addVehiculo", this.agregarVehiculo);
        // GET
        this._router.get("/empleados/todos", this.getEmpleados);
        this._router.get("/verReparacion", this.listarReparaciones);
        this._router.get("/verReparacion/:codigo", this.listarReparacion);
        this._router.get("/verVehiculos", this.listarVehiculos);
        this._router.get("/verVehiculo/:matricula", this.listarVehiculo);
        // UPDATE
        this._router.put("/updateReparacion/:codigo", this.modificarReparacion);
        this._router.put("/updateVehiculo/:matricula", this.modificarVehiculo);
        // DELETE
        this._router.delete("/deleteReparacion/:code", this.borrarReparacion);
        this._router.delete("/deleteVehiculo/:matricula", this.borrarVehiculo);
        this._router.get("/");
    }
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.routes = indexRoutes.router;
