import './Filtro.css';

export const Filtro = () => {
    return (
        <div>
            <h5 style={{ color: "rgb(57, 147, 225)", fontSize: "25px" }}>Filtrar búsqueda</ h5>
            <div className="listado-filtro">

                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" className="form-control" id="Input-nombres"
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" id="Input-apellidos" />
                </div>

                <div className="form-group">
                    <label>Identificacion (CC)</label>
                    <input type="number" className="form-control" />
                </div>


                <div className="form-group">
                    <label>Rol asociado</label>
                    <select className="form-control" id="combo-rol">
                        <option>Recolector</option>
                        <option>Coordinador</option>
                        <option>Conductor</option>
                        <option>Digitador CG/UNO</option>
                        <option>Administrador</option>
                    </select>
                </div>


                <div className="form-group">
                    <label>Estado</label>
                    <select className="form-control">
                        <option>Activo</option>
                        <option>Inactivo</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Telefono</label>
                    <input type="number" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>



                <div className="row mt-5" >
                    <button type="button" className="btn btn-success col  mr-3">Filtrar</button>
                    <button type="button" className="btn btn-outline-success col">Limpiar</button>
                </div >

            </div>

        </div >
    )
}
