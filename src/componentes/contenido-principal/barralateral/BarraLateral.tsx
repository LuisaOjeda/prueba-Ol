import './BarraLateral.css';


export const BarraLateral = () => {
    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="http://justinfarrow.com">
                            <i className="icon-barra fa fa-circle fa-2x mt-2"></i>
                        </a>
                        <hr style={{ backgroundColor: 'white' }}></hr>
                    </li>

                    <li className="has-subnav mt-4">
                        <a>

                            <i className="icon-barra  fa fa-sticky-note fa-2x"></i>
                            <span className="nav-text">
                                    Programación
                                </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>


                            <i className="fa icon-barra fa-chart-line fa-2x"></i>
                            <span className="nav-text">
                                    Gestiónn de operaciones
                                </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>

                            <i className="fa icon-barra  fa-users fa-2x"></i>
                            <span className="nav-text">
                                    Perfiles
                                </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>

                            <i className="fa fa-users-cog icon-barra  fa-2x"></i>
                            <span className="nav-text">
                                    Roles
                                </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>

                            <i className="fa fa-male fa-2x icon-barra "></i>
                            <span className="nav-text">
                                    Usuario
                                </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>

                            <i className="fa fa-file-alt fa-2x icon-barra "></i>
                            <span className="nav-text">
                                    Reportes
                                </span>
                        </a>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    )
}
