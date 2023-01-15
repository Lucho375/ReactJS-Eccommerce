import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Item = ({ id, name, images, marca, price, stock }) => {

    return (
        <li className="product__item">
            <img className="product__img" src={images[0]} alt={name} />
            <div className="product__info">
                <h2>{name}</h2>
                <p>{marca}</p>
                {stock > 0 ? <p style={{ color: "#4aa832", fontWeight: "bold" }}>Stock disponible : {stock}</p> : <p style={{ color: "#eb1e44", fontWeight: "bold" }}>Sin stock</p>}
                <p>us${price}</p>
                <Link to={`/detail/${id}`}>
                    { stock? <Button text={"Ver producto"}/> : <Button text={"Sin stock"} disabled={true}/>}
                </Link>
            </div>
        </li>
    )
}

export default Item;