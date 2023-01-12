import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "active" : "nav-link"} to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "active" : "nav-link"} to="/products">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "active" : "nav-link"} to="/contact">Contacto</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar;