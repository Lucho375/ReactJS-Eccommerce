import { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.scss";

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleClickRes = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    }

    const handleClickAdd = () => {
        if (quantity < stock) setQuantity(prev => prev + 1);
    }

    return (
        <>
            <div className="item__counter">
                <span>Cantidad: {quantity}</span>
                <button onClick={handleClickRes} className="item__counter__counts">-</button>
                <button onClick={handleClickAdd} className="item__counter__counts">+</button>
                <div style={{ marginTop: "5px" }}>
                    <Button onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount