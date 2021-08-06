import './ContenidoPrincipal.css';
import listaPersonas from '../../datos/personas.json'
import { useState } from 'react';
import React from 'react';

export const ContenidoPrincipal = () => {
    /*   listaPersonas.push({
          "nombres": "yo",
          "apellidos": "yo",
          "cedula": 5,
          "correo": 5,
          "estado": "Activo",
          "contraseña": 1,
          "rol": "secretaria",
          "telefono": 3108470148
      }) */
    const formRef = React.createRef()


    const [contenidosPrincipales, setcontenidosPrincipales] = useState({
        nombre: "",
        apellido: "",
        identificacion: "",
        rolAsociado: "",
        estado: "",
        contraseña: "",
        telefono: "",
        correo: ""
    });

    const cambio = (value: string, campo: string) => {
        setcontenidosPrincipales({
            ...contenidosPrincipales,
            [campo]: value
        });

    }
    const guardarDatos = () => {
        var persona: any = {
            nombres: contenidosPrincipales.nombre,
            apellidos: contenidosPrincipales.apellido,
            cedula: contenidosPrincipales.identificacion,
            correo: contenidosPrincipales.correo,
            estado: contenidosPrincipales.estado,
            contraseña: contenidosPrincipales.contraseña,
            rol: contenidosPrincipales.rolAsociado,
            telefono: contenidosPrincipales.telefono
        }
        console.log(JSON.stringify(persona));
        listaPersonas.push(persona);
        limpiarFormulario();
        console.log(listaPersonas);
    }

    const limpiarFormulario = () => {
        setcontenidosPrincipales(
            {
                nombre: "",
                apellido: "",
                identificacion: "",
                rolAsociado: "",
                estado: "",
                contraseña: "",
                telefono: "",
                correo: ""
            }
        );
    }


    return (
        <div>
            <div className="title-table">
                <h5>Usuarios existentes</h5>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ width: "7em" }}>Crear</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Identificacion (C.C)</th>
                        <th scope="col">Rol asociado</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo electronico</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPersonas?.map((persona) => {
                        return (
                            <tr key={persona.cedula} style={{ height: '1em' }}>
                                <td>{persona.nombres}</td>
                                <td>{persona.apellidos}</td>
                                <td>{persona.cedula}</td>
                                <td>{persona.rol}</td>
                                <td>{persona.estado} </td>
                                <td>{persona.telefono} </td>
                                <td>{persona.correo}</td>
                                <td>

                                    <i className="fas fa-pencil-alt mr-3"></i>
                                    <i className="far fa-trash-alt"></i>
                                </td>

                            </tr>
                        )
                    })}


                </tbody>
            </table>


            {/* modal crear */}
            <div className="modal" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear Persona</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            <div className="container">
                                <div className="row row-cols-2">
                                    <div className="col">

                                        <div className="form-group">
                                            <label>Nombres</label>
                                            <input type="text" className="form-control" id="Input-nombres"
                                                value={contenidosPrincipales.nombre}
                                                onChange={({ target }) => cambio(target.value, 'nombre')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Apellidos</label>
                                            <input type="text" className="form-control" id="Input-apellidos"
                                                value={contenidosPrincipales.apellido}
                                                onChange={({ target }) => cambio(target.value, 'apellido')} />
                                        </div>

                                        <div className="form-group">
                                            <label>Identificacion (CC)</label>
                                            <input type="number" className="form-control" id="Input-CC"
                                                value={contenidosPrincipales.identificacion}
                                                onChange={({ target }) => cambio(target.value, 'identificacion')} />
                                        </div>


                                        <div className="form-group">
                                            <label>Rol asociado</label>
                                            <select className="form-control" id="combo-rol" value={contenidosPrincipales.rolAsociado}
                                                onChange={({ target }) => cambio(target.value, 'rolAsociado')}>
                                                <option>Administrador</option>
                                                <option>Conductor</option>
                                                <option>Recolector</option>
                                                <option>Coordinador</option>
                                                <option>Digitador CG/UNO</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Estado</label>
                                            <select className="form-control" id="combo-estado" value={contenidosPrincipales.estado}
                                                onChange={({ target }) => cambio(target.value, 'estado')}>
                                                <option>Activo</option>
                                                <option>Inactivo</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Contraseña</label>
                                            <input type="text" className="form-control" id="Input-pass"
                                                value={contenidosPrincipales.contraseña}
                                                onChange={({ target }) => cambio(target.value, 'contraseña')} />
                                        </div>

                                        <div className="form-group">
                                            <label>Telefono</label>
                                            <input type="number" className="form-control" id="Input-tel"
                                                value={contenidosPrincipales.telefono}
                                                onChange={({ target }) => cambio(target.value, 'telefono')} />
                                        </div>

                                        <div className="form-group">
                                            <label>Correo electronico</label>
                                            <input type="email" className="form-control" id="Input-correo" placeholder="name@example.com"
                                                value={contenidosPrincipales.correo}
                                                onChange={({ target }) => cambio(target.value, 'correo')} />
                                        </div>


                                    </div>

                                </div>
                            </div>

                            <div className="row container " /* style="justify-content: center;text-align: left;" */>
                            </div>
                            {/* fin */}
                        </div>
                        <div className="modal-footer">
                            <div className="row mt-2">
                                <button type="button" className="btn btn-success col mr-5" data-dismiss="modal" onClick={() => guardarDatos()} >Guardar</button>

                                <button type="button" className="btn btn-outline-success col  mr-3" data-dismiss="modal">cerrar</button>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
