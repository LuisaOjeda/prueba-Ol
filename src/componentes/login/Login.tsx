import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();

    return (
        <div>


            <button type="button" className="btn btn-primary" onClick={() => goToHome()}>pasar de pantalla</button>
        </div>
    )
    function goToHome() {
        var ruta = "Home";
        history.push(ruta);
    }


}
