import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";
import "./Item.scss"

const Item = ({ id, name, images, marca, stock }) => {

    const { isInCart } = useContext(CartContext);

    return (
        <li className="product__item">
            <img className="product__item__img" src={images[0]} alt={name} />
            <div className="product__item__info">
                <h2 className="product__item__title">{name}</h2>
                {isInCart(id) ? <Link to="/cart" className="product__item__inCart">En carrito</Link> : null}
                <p>{marca}</p>
                {stock > 0 ? <p className="product__item__stock">Stock disponible : {stock}</p> : <p className="product__item__noStock">Sin stock</p>}
                <Link to={`/detail/${id}`}>
                    {stock ? <Button text={"Ver producto"} /> : <Button text={"Sin stock"} disabled={true} />}
                </Link>
            </div>
        </li>
    )
}

export default Item;