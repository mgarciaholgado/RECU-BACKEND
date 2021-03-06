import { match } from "assert";
import { Request, Response, Router } from "express";
import { Cliente } from "../classes/clientes/clientes";
import { Empleado } from "../classes/empleados/empleado";
import { Mecanico } from "../classes/empleados/mecanico";
import { Pintor } from "../classes/empleados/pintor";
import { Deportivo } from "../classes/vehiculos/deportivo";
import { todoTerreno } from "../classes/vehiculos/todTerreno";
import { Vehiculo } from "../classes/vehiculos/vehiculo";
import { db } from "../database/database";
import { Clientes } from "../model/clientes";
import {
  Empleados,
  tEmpleado,
  tSalario,
} from "../model/empleados";
import { Reparaciones } from "../model/reparacion";
import { tValor, tVehiculo, Vehiculos } from "../model/vehiculos";

class IndexRoutes {
  private _router: Router;

  constructor() {
    this._router = Router();
  }
  get router() {
    return this._router;
  }

  private getEmpleados = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Empleados.find({});
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private getMecanicos = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Empleados.aggregate([
          { $match: { _tipoEmpleado: "mecanico" } },
        ]);
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private getPintores = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Empleados.aggregate([
          { $match: { _tipoEmpleado: "pintor" } },
        ]);
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private agregarEmpleado = async (req: Request, res: Response) => {
    const {
      dni,
      nombre,
      tipoEmpleado,
      fechaContratacion,
      sueldoMes,
      empresaContratista,
      horasExtra,
    } = req.body;
    await db.conectarBD();
    const dSchema = {
      _dni: dni,
      _nombre: nombre,
      _tipoEmpleado: tipoEmpleado,
      _fechaContratacion: fechaContratacion,
      _sueldoMes: sueldoMes,
      _empresaContratista: empresaContratista,
      _horasExtra: horasExtra,
    };
    const oSchema = new Empleados(dSchema);
    await oSchema
      .save()
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));
    await db.desconectarBD();
  };

  private agregarReparacion = async (req: Request, res: Response) => {
    const { codigo, matricula, nombre, coste } = req.body;
    await db.conectarBD();
    const dSchema = {
      _codReparacion: codigo,
      _matricula: matricula,
      _nombreReparacion: nombre,
      _CosteBase: coste,
    };
    const oSchema = new Reparaciones(dSchema);
    await oSchema
      .save()
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));
    await db.desconectarBD();
  };

  private agregarVehiculo = async (req: Request, res: Response) => {
    const { DNIpropietario, matricula, modelo, marca, color, precio, tipoVehiculo, traccion, potencia } = req.body;
    await db.conectarBD();
    const dSchema = {
      _DNIpropietario: DNIpropietario,
      _matricula: matricula,
      _marca: marca,
      _modelo: modelo,
      _color: color,
      _precio: precio,
      _tipoVehiculo: tipoVehiculo,
      _potencia: potencia,
      _traccion: traccion

    };
    const oSchema = new Vehiculos(dSchema);
    await oSchema
      .save()
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));
    await db.desconectarBD();
  };

  private agregarCliente = async (req: Request, res: Response) => {
    const { dni, nombre, telefono } = req.body;
    await db.conectarBD();
    const dSchema = {
      _dni: dni,
      _nombre: nombre,
      _telefono: telefono,
    };
    const oSchema = new Clientes(dSchema);
    await oSchema
      .save()
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));
    await db.desconectarBD();
  };

  private modificarReparacion = async (req: Request, res: Response) => {
    await db.conectarBD();
    const code = req.params.codigo;
    const { codigo, matricula, nombre, coste } = req.body;
    await Reparaciones.findOneAndUpdate(
      { _codReparacion: code },
      {
        _codReparacion: codigo,
        _matricula: matricula,
        _nombreReparacion: nombre,
        _CosteBase: coste,
      },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarCliente = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dn = req.params.dni;
    const { dni, nombre, telefono } = req.body;
    await Clientes.findOneAndUpdate(
      { _dni: dn },
      { _dni: dni, _nombre: nombre, _telefono: telefono },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarDeportivo = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.matricula;
    const { DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo, potencia } = req.body;
    await Vehiculos.findOneAndUpdate(
      { _matricula: mat },
      { _DNIpropietario: DNIpropietario, _matricula: matricula, _marca: marca, _modelo: modelo, _color: color, _precio: precio, _tipoVehiculo: tipoVehiculo, _potencia: potencia },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarTodoterreno = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.matricula;
    const { DNIpropietario, matricula, marca, modelo, color, precio, tipoVehiculo, traccion} = req.body;
    await Vehiculos.findOneAndUpdate(
      { _matricula: mat },
      {  _DNIpropietario: DNIpropietario, _matricula: matricula, _marca: marca, _modelo: modelo, _color: color, _precio: precio, _tipoVehiculo: tipoVehiculo, _traccion: traccion },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarMecanico = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.dni;
    const { dni, nombre, tipoEmpleado, fechaContratacion, sueldoMes, horasExtra} = req.body;
    await Empleados.findOneAndUpdate(
      { _dni: mat },
      { _dni: dni, _nombre: nombre, _tipoEmpleado: tipoEmpleado, _fechaContratacion: fechaContratacion, _sueldoMes: sueldoMes, _horasExtra: horasExtra },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarPintor = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.dni;
    const { dni, nombre, tipoEmpleado, fechaContratacion, sueldoMes, empresaContratista} = req.body;
    await Empleados.findOneAndUpdate(
      { _dni: mat },
      { _dni: dni, _nombre: nombre, _tipoEmpleado: tipoEmpleado, _fechaContratacion: fechaContratacion, _sueldoMes: sueldoMes, _empresaContratista: empresaContratista },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private borrarReparacion = async (req: Request, res: Response) => {
    await db.conectarBD();
    const codigo = req.params.code;
    await Reparaciones.findOneAndDelete({ _codReparacion: codigo })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private borrarVehiculo = async (req: Request, res: Response) => {
    await db.conectarBD();
    const matricula = req.params.matricula;
    await Vehiculos.findOneAndDelete({ _matricula: matricula })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private borrarCliente = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dni = req.params.dni;
    await Clientes.findOneAndDelete({ _dni: dni })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private borrarEmpleado = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dni = req.params.dni;
    await Empleados.findOneAndDelete({ _dni: dni })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private listarReparaciones = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Reparaciones.find();
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private listarReparacion = async (req: Request, res: Response) => {
    await db.conectarBD();
    const codigo = req.params.codigo;
    await Reparaciones.findOne({ _codReparacion: codigo })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private listarVehiculos = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Vehiculos.find({});
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private listarClientes = async (req: Request, res: Response) => {
    await db
      .conectarBD()
      .then(async (mensaje) => {
        const query = await Clientes.find({});
        res.json(query);
      })
      .catch((mensaje) => {
        res.send(mensaje);
      });
    await db.desconectarBD();
  };

  private listarVehiculo = async (req: Request, res: Response) => {
    await db.conectarBD();
    const matricula = req.params.matricula;
    await Vehiculos.findOne({ _matricula: matricula })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private listarCliente = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dni = req.params.dni;
    await Clientes.findOne({ _dni: dni })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private listarEmpleado = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dni = req.params.dni;
    await Empleados.findOne({ _dni: dni })
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private calcularSueldoA??o = async (req: Request, res: Response) => {
    await db.conectarBD();
    let tmpEmpleado: Empleado = new Empleado("", "", new Date(), 0);
    let dEmpleado: tEmpleado;
    let arraySueldo: Array<tSalario> = [];

    const query = await Empleados.find({});
    for (dEmpleado of query) {
      if (dEmpleado._tipoEmpleado == "mecanico") {
        tmpEmpleado = new Mecanico(
          dEmpleado._dni,
          dEmpleado._nombre,
          dEmpleado._fechaContratacion,
          dEmpleado._sueldoMes,
          dEmpleado._horasExtra
        );

      } else if (dEmpleado._tipoEmpleado == "pintor") {
        tmpEmpleado = new Pintor(
          dEmpleado._dni,
          dEmpleado._nombre,
          dEmpleado._fechaContratacion,
          dEmpleado._sueldoMes,
          dEmpleado._empresaContratista
        );

      }


      let salarioT: number = 0;
      salarioT = tmpEmpleado.calcularSueldoA??o();

      let dSalario: tSalario = {
        _dni: null,
        _nombre: null,
        _sueldoTotal: null,
      };

      dSalario._dni = tmpEmpleado.dni;
      dSalario._nombre = tmpEmpleado.nombre;
      dSalario._sueldoTotal = salarioT;

      arraySueldo.push(dSalario);
    }
    res.json(arraySueldo);

    await db.desconectarBD();
  };

  private calcularValorVehiculos = async (req: Request, res: Response) => {
    await db.conectarBD();
    let tmpVehiculo: Vehiculo = new Vehiculo("", "", "", "", "", 0, "");
    let vehiculo: tVehiculo;
    let arrayVehiculos: Array<tValor> = [];

    const query = await Vehiculos.find({});

    for (vehiculo of query) {
      if (vehiculo._tipoVehiculo == "Deportivo") {
        tmpVehiculo = new Deportivo(
          vehiculo._DNIpropietario,
          vehiculo._matricula,
          vehiculo._marca,
          vehiculo._modelo,
          vehiculo._color,
          vehiculo._precio,
          vehiculo._tipoVehiculo,
          vehiculo._potencia
        );

      } else if (vehiculo._tipoVehiculo == "Todoterreno") {
        tmpVehiculo = new todoTerreno(
          vehiculo._DNIpropietario,
          vehiculo._matricula,
          vehiculo._marca,
          vehiculo._modelo,
          vehiculo._color,
          vehiculo._precio,
          vehiculo._tipoVehiculo,
          vehiculo._traccion
        );

      }

      let valorT: number = 0;
      valorT = tmpVehiculo.valorCoches();

      let dVehiculo: tValor = {
        _matricula: null,
        _tipoVehiculo: null,
        _marca: null,
        _modelo: null,
        _valor: null
      };
      dVehiculo._matricula = tmpVehiculo.matricula;
      dVehiculo._tipoVehiculo = tmpVehiculo.tipoVehiculo;
      dVehiculo._marca = tmpVehiculo.marca;
      dVehiculo._modelo = tmpVehiculo.modelo;
      dVehiculo._valor = valorT;

      arrayVehiculos.push(dVehiculo);

    }
    res.json(arrayVehiculos);

    await db.desconectarBD();
  };

  private look = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dni = req.params.dni;
    const query = await Vehiculos.aggregate([
      {
        $lookup: {
          from: "clientes",
          localField: "_DNIpropietario",
          foreignField: "_dni",
          as: "cliente",
        },
      },
      { $match: { _DNIpropietario: dni } }, {
        $project: {
          _id: 0,
          _DNIpropietario: 0,
          cliente: 0
        }
      }

    ]);

    res.json(query);
    await db.desconectarBD();
  };

  private look2 = async (req: Request, res: Response) => {
    await db.conectarBD();
    const matricula = req.params.matricula;
    const query = await Reparaciones.aggregate([
      {
        $lookup: {
          from: "vehiculos",
          localField: "_matricula",
          foreignField: "_matriculas",
          as: "vehiculo",
        },
      },
      { $match: { _matricula: matricula } }

    ]);

    res.json(query);
    await db.desconectarBD();
  };


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
    this._router.get("/verEmpleado/:dni", this.listarEmpleado);
    this._router.get("/sueldo", this.calcularSueldoA??o);
    this._router.get("/valor", this.calcularValorVehiculos);
    this._router.get("/look/:dni", this.look);
    this._router.get("/look2/:matricula", this.look2);
    
    // UPDATE
    this._router.put("/updateReparacion/:codigo", this.modificarReparacion);
    this._router.put("/updateCliente/:dni", this.modificarCliente);
    this._router.put("/updateDeportivo/:matricula", this.modificarDeportivo);
    this._router.put("/updateTodoterreno/:matricula", this.modificarTodoterreno);
    this._router.put("/updateMecanico/:dni", this.modificarMecanico);
    this._router.put("/updatePintor/:dni", this.modificarPintor);
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
export const routes = indexRoutes.router;
