import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '../componentes/home/Home'
import { Login } from '../componentes/login/Login'

export const Routes = () => {
    return (
        <Router>
            <Route path="/" exact>
                <Login></Login>
            </Route>
            <Route path="/Home" exact>
                <Home></Home>
            </Route>
        </Router>
    )
}
