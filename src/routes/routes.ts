import { match } from "assert";
import { Request, Response, Router } from "express";
import { Cliente } from "../classes/clientes/clientes";
import { Empleado } from "../classes/empleados/empleado";
import { Mecanico } from "../classes/empleados/mecanico";
import { Pintor } from "../classes/empleados/pintor";
import { Vehiculo } from "../classes/vehiculos/vehiculo";
import { db } from "../database/database";
import { Clientes } from "../model/clientes";
import {
  Empleados,
  tEmpleado,
  tEmpleado2,
  tMecanico,
  tMecanico2,
  tSalario,
} from "../model/empleados";
import { Reparaciones } from "../model/reparacion";
import { tVehiculo, Vehiculos } from "../model/vehiculos";

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
    const { DNIpropietario, matricula, modelo , marca, color, precio, tipoVehiculo } = req.body;
    await db.conectarBD();
    const dSchema = {
      _DNIpropietario: DNIpropietario,
      _matricula: matricula,
      _marca: marca,
      _modelo: modelo,
      _color: color,
      _precio: precio,
      _tipoVehiculo: tipoVehiculo,
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

  private modificarVehiculo = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.matricula;
    const { DNIpropietario, matricula, modelo, marca, color, precio , tipoVehiculo } = req.body;
    await Vehiculos.findOneAndUpdate(
      { _matricula: mat },
      {
        _DNIpropietario: DNIpropietario,
        _matricula: matricula,
        _marca: marca,
        _modelo: modelo,
        _color: color,
        _precio: precio,
        _tipoVehiculo: tipoVehiculo,
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

  private calcularSueldoAño = async (req: Request, res: Response) => {
    await db.conectarBD();
    let tmpEmpleado: Empleado;
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
        let salarioT: number = 0;
        salarioT = tmpEmpleado.calcularSueldoAño();

        let dSalario: tSalario = {
          _dni: null,
          _nombre: null,
          _sueldoTotal: null,
        };

        dSalario._dni = tmpEmpleado.dni;
        dSalario._nombre = tmpEmpleado.nombre;
        dSalario._sueldoTotal = salarioT;
        arraySueldo.push(dSalario);
      } else if (dEmpleado._tipoEmpleado == "pintor") {
        tmpEmpleado = new Pintor(
          dEmpleado._dni,
          dEmpleado._nombre,
          dEmpleado._fechaContratacion,
          dEmpleado._sueldoMes,
          dEmpleado._empresaContratista
        );
        let salarioT: number = 0;
        salarioT = tmpEmpleado.calcularSueldoAño();

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
    }
    res.json(arraySueldo);

    await db.desconectarBD();
  };

  private pruebalook = async (req: Request, res: Response) => {
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
      { $match: { _DNIpropietario: dni } },{
        $project:{
          _id: 0,
          _DNIpropietario:0,
          cliente: 0
        }
      }
      
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
    this._router.get("/sueldo", this.calcularSueldoAño);
    this._router.get("/look/:dni", this.pruebalook);
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
export const routes = indexRoutes.router;
