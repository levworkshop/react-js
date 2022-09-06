import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="nav-link active text-white">
                    <i className="bi-airplane-fill me-3"></i>
                    Fun Vacation
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/order" className="nav-link active">
                            Order Now
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;