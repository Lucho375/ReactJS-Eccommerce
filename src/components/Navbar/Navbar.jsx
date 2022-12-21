import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1>Logo</h1>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="./">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="./">Productos</a></li>
                    <li className="nav-item"><a className="nav-link" href="./">Contacto</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default Navbar;