import './Home.css';
import { BarraLateral } from "../barralateral/BarraLateral"
import { ContenidoPrincipal } from "../contenido-principal/ContenidoPrincipal"
import { Filtro } from "../filtro/Filtro"
import { NavBar } from "../navbar/NavBar"
import { Footer } from '../footer/Footer';

export const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <BarraLateral></BarraLateral>

            <main>
                <article>
                    <ContenidoPrincipal></ContenidoPrincipal>
                </article>
                <aside>
                    <Filtro></Filtro>
                </aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    )
}
