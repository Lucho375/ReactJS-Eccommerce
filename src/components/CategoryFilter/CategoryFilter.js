import { Link, NavLink } from "react-router-dom";
import "./CategoryFilter.css";

const CategoryFilter = () => {
    return (
        <div className="filter__container">
            <h3>Filtrar por categoria</h3>
            <ul className="filter">
                <li><Link to="/products" className="filter__link--remove">Borrar filtro</Link></li>
                <li><NavLink className={({ isActive }) => isActive ? "filter__link--active" : "filter__link"} to="../category/placas de video">Placas de video</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "filter__link--active" : "filter__link"} to="../category/fuentes">Fuentes</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "filter__link--active" : "filter__link"} to="../category/procesadores">Procesadores</NavLink></li>
            </ul>
        </div>
    )
}

export default CategoryFilter;