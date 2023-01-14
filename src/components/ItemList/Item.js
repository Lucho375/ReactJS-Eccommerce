import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Item = ({ id, name, images, marca, price, stock }) => {
    
    return (
        <li className="product__item">
            <img className="product__img" src={images[0]} alt={name} />
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
    )
}

export default Item;