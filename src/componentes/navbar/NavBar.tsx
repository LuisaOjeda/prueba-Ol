export const NavBar = () => {
    return (
        <div>
            {/* <!-- barra superior --> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white ml-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Prueba Front-end <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Andrés Felipe Garcia Castro
                    </span>
                </div>
            </nav>
        </div>
    )
}
