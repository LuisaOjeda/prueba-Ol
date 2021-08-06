import './Filtro.css';

export const Filtro = () => {
    return (
        <div>
            <h5 style={{ color: "rgb(57, 147, 225)", fontSize: "25px" }}> ICONO Filtrar búsqueda</ h5>
            <div className="listado-filtro">
                <div className="input-group ">
                    <p>Nombres <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"
                        aria-describedby="basic-addon1" /> </p>
                </div>
                <br />
                <div className="input-group" style={{ boxShadow: "teal", borderRadius: "5px" }}>
                    <p>Apellidos <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"
                        aria-describedby="basic-addon1" /> </p>
                </div>
                <br />
                <div className="input-group ">
                    <p>Identificacion(C.C) <input type="text" className="form-control " placeholder="Usuario"
                        aria-label="Username" aria-describedby="basic-addon1" style={{ borderRadius: "5px" }} /> </p>
                </div>
                <br />
                <div className="mb-3">
                    <p> Disabled select menu <br />
                        <select id="disabledSelect" className="form-select">
                            <option>jyjthbv</option>
                            <option>1234 select</option>
                            <option>Disabled select</option>
                        </select>
                    </p>
                </div>
                <br />
                <div className="mb-3">
                    <p> Disabled select menu <br />
                        <select id="disabledSelect" className="form-select">
                            <option>jyjthbv</option>
                            <option>1234 select</option>
                            <option>Disabled select</option>
                        </select>
                    </p>
                </div>
                <br />
                <div className="input-group" style={{ boxShadow: "teal" }}>
                    <p>Contraseña <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"
                        aria-describedby="basic-addon1" /> </p>
                </div>
                <br />
                <div className="input-group ">
                    <p>Telefono <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"
                        aria-describedby="basic-addon1" /> </p>
                </div>
                <br />
                <div className="input-group" style={{ boxShadow: "teal" }}>
                    <p>Correo electronico <input type="text" className="form-control" placeholder="Usuario"
                        aria-label="Username" aria-describedby="basic-addon1" /> </p>
                </div>
            </div>
        </div>
    )
}
