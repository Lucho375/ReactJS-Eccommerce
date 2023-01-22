import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../Context/CartContext";
import "./Navbar.css";

const Navbar = () => {

    const { totalQuantity } = useContext(CartContext)

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
                <CartWidget totalQuantity={totalQuantity} />
            </nav>
        </header>
    )
}

export default Navbar;