import { Request, Response, Router } from "express";
import { db } from "../database/database";
import { Clientes } from "../model/clientes";
import { Empleados, tMecanico } from "../model/empleados";
import { Reparaciones } from "../model/reparacion";
import { Vehiculos } from "../model/vehiculos";

class IndexRoutes {
  private _router: Router;

  constructor() {
    this._router = Router();
  }
  get router() {
    return this._router;
  }

  private getEmpleados = async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
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

  private agregarEmpleado = async (req: Request, res: Response) => {
    const { nombre, sueldo, tipoEmpleado, tipoMec, horasExtra } = req.body;
    await db.conectarBD();
    const dSchema = {
      _nombre: nombre,
      _sueldo: sueldo,
      _tipoEmpleado: tipoEmpleado,
      _tipoMec: tipoMec,
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
    const { matricula, marca, color, tipoVehiculo } = req.body;
    await db.conectarBD();
    const dSchema = {
      _matricula: matricula,
      _marca: marca,
      _color: color,
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
      { _codReparacion: codigo,_matricula: matricula,_nombreReparacion: nombre, _CosteBase: coste },
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarVehiculo = async (req: Request, res: Response) => {
    await db.conectarBD();
    const mat = req.params.matricula;
    const {  matricula,marca, color, tipoVehiculo } = req.body;
    await Vehiculos.findOneAndUpdate(
      { _matricula: mat },
      { _matricula: matricula,_marca: marca, _color: color,  _tipoVehiculo: tipoVehiculo},
      { new: true }
    )
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));

    await db.desconectarBD();
  };

  private modificarCliente = async (req: Request, res: Response) => {
    await db.conectarBD();
    const dn = req.params.dni;
    const {  dni,nombre, telefono } = req.body;
    await Clientes.findOneAndUpdate(
      { _dni: dn },
      { _dni: dni,_nombre: nombre, _telefono: telefono},
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

  private registroUser = async (req: Request, res: Response) => {
    const { codigo, nombre, coste } = req.body;
    await db.conectarBD();
    const dSchema = {
      /*_dni: string;
            _nombre: string;
            _password: number;
            _tipoEmpleado: string;*/
    };
    const oSchema = new Reparaciones(dSchema);
    await oSchema
      .save()
      .then((doc: any) => res.send(doc))
      .catch((err: any) => res.send("Error: " + err));
    await db.desconectarBD();
  };

  routes() {
    // POST
    this._router.post("/empleados", this.agregarEmpleado);
    this._router.post("/register", this.registroUser);
    this._router.post("/addReparacion", this.agregarReparacion);
    this._router.post("/addVehiculo", this.agregarVehiculo);
    this._router.post("/addCliente", this.agregarCliente);

    // GET
    this._router.get("/empleados/todos", this.getEmpleados);
    this._router.get("/verReparacion", this.listarReparaciones);
    this._router.get("/verReparacion/:codigo", this.listarReparacion);
    this._router.get("/verVehiculos", this.listarVehiculos);
    this._router.get("/verClientes", this.listarClientes);
    this._router.get("/verVehiculo/:matricula", this.listarVehiculo);
    this._router.get("/verCliente/:dni", this.listarCliente);
    // UPDATE
    this._router.put("/updateReparacion/:codigo", this.modificarReparacion);
    this._router.put("/updateVehiculo/:matricula", this.modificarVehiculo);
    this._router.put("/updateCliente/:dni", this.modificarCliente);
    // DELETE
    this._router.delete("/deleteReparacion/:code", this.borrarReparacion);
    this._router.delete("/deleteVehiculo/:matricula", this.borrarVehiculo);
    this._router.delete("/deleteCliente/:dni", this.borrarCliente);
    this._router.get("/");
  }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();
export const routes = indexRoutes.router;
