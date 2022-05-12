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
const mecanico_1 = require("../classes/empleados/mecanico");
const pintor_1 = require("../classes/empleados/pintor");
const database_1 = require("../database/database");
const clientes_1 = require("../model/clientes");
const empleados_1 = require("../model/empleados");
const reparacion_1 = require("../model/reparacion");
const vehiculos_1 = require("../model/vehiculos");
class IndexRoutes {
    constructor() {
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
        this.getMecanicos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleados_1.Empleados.aggregate([{ $match: { _tipoEmpleado: "mecanico" } }]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPintores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleados_1.Empleados.aggregate([{ $match: { _tipoEmpleado: "pintor" } }]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.agregarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, tipoEmpleado, fechaContratacion, sueldoMes, empresaContratista, horasExtra } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _tipoEmpleado: tipoEmpleado,
                _fechaContratacion: fechaContratacion,
                _sueldoMes: sueldoMes,
                _empresaContratista: empresaContratista,
                _horasExtra: horasExtra
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
            const { DNIpropietario, matricula, marca, color, tipoVehiculo } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _DNIpropietario: DNIpropietario,
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
        this.agregarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, telefono } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _telefono: telefono,
            };
            const oSchema = new clientes_1.Clientes(dSchema);
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
            const { DNIpropietario, matricula, marca, color, tipoVehiculo } = req.body;
            yield vehiculos_1.Vehiculos.findOneAndUpdate({ _matricula: mat }, { _DNIpropietario: DNIpropietario, _matricula: matricula, _marca: marca, _color: color, _tipoVehiculo: tipoVehiculo }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.modificarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dn = req.params.dni;
            const { dni, nombre, telefono } = req.body;
            yield clientes_1.Clientes.findOneAndUpdate({ _dni: dn }, { _dni: dni, _nombre: nombre, _telefono: telefono }, { new: true })
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
        this.borrarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield clientes_1.Clientes.findOneAndDelete({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.borrarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield empleados_1.Empleados.findOneAndDelete({ _dni: dni })
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
        this.listarClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield clientes_1.Clientes.find({});
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
        this.listarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield clientes_1.Clientes.findOne({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.calcularSueldoAño = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            let tmpEmpleado;
            let dEmpleado;
            let arraySueldo = [];
            const query = yield empleados_1.Empleados.find({});
            for (dEmpleado of query) {
                if (dEmpleado._tipoEmpleado == 'mecanico') {
                    tmpEmpleado = new mecanico_1.Mecanico(dEmpleado._dni, dEmpleado._nombre, dEmpleado._fechaContratacion, dEmpleado._sueldoMes, dEmpleado._horasExtra);
                    let salarioT = 0;
                    salarioT = tmpEmpleado.calcularSueldoAño();
                    let dSalario = {
                        _dni: null,
                        _nombre: null,
                        _sueldoTotal: null
                    };
                    dSalario._dni = tmpEmpleado.dni;
                    dSalario._nombre = tmpEmpleado.nombre;
                    dSalario._sueldoTotal = salarioT;
                    arraySueldo.push(dSalario);
                }
                else if (dEmpleado._tipoEmpleado == 'pintor') {
                    tmpEmpleado = new pintor_1.Pintor(dEmpleado._dni, dEmpleado._nombre, dEmpleado._fechaContratacion, dEmpleado._sueldoMes, dEmpleado._empresaContratista);
                    let salarioT = 0;
                    salarioT = tmpEmpleado.calcularSueldoAño();
                    let dSalario = {
                        _dni: null,
                        _nombre: null,
                        _sueldoTotal: null
                    };
                    dSalario._dni = tmpEmpleado.dni;
                    dSalario._nombre = tmpEmpleado.nombre;
                    dSalario._sueldoTotal = salarioT;
                    arraySueldo.push(dSalario);
                }
            }
            res.json(arraySueldo);
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    routes() {
        // POST
        this._router.post("/addReparacion", this.agregarReparacion);
        this._router.post("/addVehiculo", this.agregarVehiculo);
        this._router.post("/addCliente", this.agregarCliente);
        this._router.post("/addEmpleado", this.agregarEmpleado);
        // GET
        this._router.get("/verEmpleados", this.getEmpleados);
        this._router.get("/verMecanicos", this.getMecanicos);
        this._router.get("/verPintores", this.getPintores);
        this._router.get("/verReparacion", this.listarReparaciones);
        this._router.get("/verReparacion/:codigo", this.listarReparacion);
        this._router.get("/verVehiculos", this.listarVehiculos);
        this._router.get("/verClientes", this.listarClientes);
        this._router.get("/verVehiculo/:matricula", this.listarVehiculo);
        this._router.get("/verCliente/:dni", this.listarCliente);
        this._router.get("/sueldo", this.calcularSueldoAño);
        // UPDATE
        this._router.put("/updateReparacion/:codigo", this.modificarReparacion);
        this._router.put("/updateVehiculo/:matricula", this.modificarVehiculo);
        this._router.put("/updateCliente/:dni", this.modificarCliente);
        // DELETE
        this._router.delete("/deleteReparacion/:code", this.borrarReparacion);
        this._router.delete("/deleteVehiculo/:matricula", this.borrarVehiculo);
        this._router.delete("/deleteCliente/:dni", this.borrarCliente);
        this._router.delete("/deleteEmpleado/:dni", this.borrarEmpleado);
        this._router.get("/");
    }
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.routes = indexRoutes.router;
