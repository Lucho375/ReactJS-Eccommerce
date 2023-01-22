import "./ItemDetail.css";
import Slider from "../Slider/Slider";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { NotificationContext } from "../Notification/NotificationService";

const ItemDetail = ({ id, images, name, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext);

    const handleAdd = (quantity) => {
        setQuantity(quantity)
        addItem({ id, name, price, quantity })
        setNotification(`Agregado al carrito ${name}`, "success", 3)
    }

    return (
        <div className="card">
            <Slider arr={images} />
            <div className="card__content">
                <h2 className="card__title">{name}</h2>
                <span className="card__price">Precio: us${price}</span>
                {
                    isInCart(id) ? (<Link to="/cart"><Button text={"Terminar Compra"}></Button></Link>) : <ItemCount stock={stock} onAdd={handleAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail;