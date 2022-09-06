import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <i className="bi-cup-hot-fill me-3"></i>
                    {props.name}
                </Link>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3">
                        <Link to="/pricing" className="nav-link">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders" className="nav-link">
                            View Orders
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;