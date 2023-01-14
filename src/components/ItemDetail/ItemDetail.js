import "./ItemDetail.css";
import Slider from "../Slider/Slider";
import Button from "../Button/Button"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ images, name, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (qty) => {
        setQuantity(qty)
    }

    return (
        <div className="card">
            <Slider arr={images} />
            <div className="card__content">
                <h2 className="card__title">{name}</h2>
                <span>Precio: us${price}</span>
                {
                    quantity > 0 ? (<Link to="/cart"><Button text={"Terminar Compra"}></Button></Link>) : (<ItemCount stock={stock} onAdd={handleAdd} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail;