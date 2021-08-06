import './Login.css';
import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();

    return (
        <div className="fondo">
            <div className="div-aplication">
                {/*  <h2 style={{ color: "white" }}>Aplicacion <br> OLSoftware <br></h2> */}
                <p style={{ color: "white" }}>Prueba practica Front-end </p>
            </div>
            <div className="div-login p-5">
                <div className="div-login-h1 mb-5">
                    <h4>Inicio de sesion</h4>
                </div>
                <div>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"
                            aria-describedby="basic-addon1" style={{ borderRadius: "0", height: "4em", width: "24em" }} />
                    </div>
                    <div className="input-group" style={{ boxShadow: "teal" }}>
                        <input type="text" className="form-control" placeholder="Contraseña" aria-label="Username"
                            aria-describedby="basic-addon1" style={{ borderRadius: "0", boxShadow: "teal", height: "4em", width: "24em" }} />

                    </div>
                </div>
                <div>
                    <button type="button" className="mt-5 btn btn-primary btn-lg" style={{ width: "-webkitFillAvailable 19em" }} onClick={() => goToHome()}>Iniciar sesion
                    </button>
                </div>
            </div>


        </div>
    )
    function goToHome() {
        var ruta = "Home";
        history.push(ruta);
    }


}
