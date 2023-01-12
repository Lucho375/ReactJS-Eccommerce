import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./ItemList.css"


const ProductsList = ({ products }) => {
    return (
        <>
            <div>
                <div className="filter__container">
                    <h2>Filtrar por categoria</h2>
                    <ul className="filter">
                        <li><Link to="../products" style={{backgroundColor: "red", padding: "10px", borderRadius: "5px"}}>Borrar filtro</Link></li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : "link"} to="../products/category/placas-de-video">Placas de video</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : "link"} to="../products/category/fuentes">Fuentes</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : "link"} to="../products/category/procesadores">Procesadores</NavLink></li>
                    </ul>
                </div>
                <ul className="product__list">
                    {
                        products.map(({ id, name, marca, price, images , stock}, index) => (
                            <li key={index} className="product__item">
                                <img className="product__img" src={images[0]} alt={name}/>
                                <div className="product__info">
                                    <h2>{name}</h2>
                                    <p>{marca}</p>
                                    <p>Stock disponible: {stock}</p>
                                    <p>us${price}</p>
                                    <Link to={`/detail/${id}`}>
                                        <Button text={"Ver producto"} />
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductsList;