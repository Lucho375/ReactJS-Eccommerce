import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../Context/CartContext";
import "./Navbar.scss";

const Navbar = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
                <ul className="header__nav__list">
                    <li className="header__nav__list__item">
                        <NavLink className={({ isActive }) => isActive ? "header__nav__list__link--active" : "header__nav__list__link"} to="/">Inicio</NavLink>
                    </li>
                    <li className="header__nav__list__item">
                        <NavLink className={({ isActive }) => isActive ? "header__nav__list__link--active" : "header__nav__list__link"} to="/products">Productos</NavLink>
                    </li>
                </ul>
                <CartWidget totalQuantity={totalQuantity} />
            </nav>
        </header>
    )
}

export default Navbar;