import '../navbar/NavBar.css';

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
                            <img width="100" height="80" src="https://olsoftware.com/wp-content/uploads/2020/06/cropped-Logo-ols-300x268.png" />

                        </li>
                    </ul>
                    <span className="navbar-text">
                        Andrés Felipe Garcia Castro
                    </span>

                    <i className="icon-logout fa fa-sign-out-alt fa-2x"></i>

                </div>
            </nav>
        </div>
    )
}
