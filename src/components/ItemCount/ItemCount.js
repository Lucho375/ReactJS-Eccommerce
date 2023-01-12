import { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)

    const handleClickRes = () => {
        if (count > 1) setCount(prev => prev - 1)
    }

    const handleClickSum = () => {
        if (count < stock) setCount(prev => prev + 1)
    }

    return (
        <>
            <div className="itemCounter">
                <span>Cantidad: {count}</span>
                <button onClick={handleClickRes} className="counts">-</button>
                <button onClick={handleClickSum} className="counts">+</button>
                <div style={{marginTop: "5px"}}>
                    <Button text={"Comprar"}/>
                </div>
            </div>
        </>
    )
}

export default ItemCount