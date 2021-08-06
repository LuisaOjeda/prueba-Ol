import './BarraLateral.css';


export const BarraLateral = () => {
    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="http://justinfarrow.com">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Dashboard
                            </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a>
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">
                                Stars Components
                            </span>
                        </a>

                    </li>
                </ul>
            </nav>
        </div>
    )
}
