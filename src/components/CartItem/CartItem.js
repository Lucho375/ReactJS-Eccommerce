import plus from "./plus.png"
import minus from "./minus.png"
import remove from "./remove.png"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { NotificationContext } from "../Notification/NotificationService"
import "./CartItem.scss";

const CartItem = (item) => {

    const { removeItemCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleClick = (e) => {
        removeItemCart(e.id)
        setNotification(`Borrado ${e.name} del carrito`, "success", 2)
    }

    const handleClickDecrease = (prod) => {
        decreaseQuantity(prod)
    }

    const handleClickIncrease = (prod) => {
        if (prod.quantity < prod.stock) {
            increaseQuantity(prod)
        } else {
            setNotification(`No hay mas stock de ${prod.name}`, "error", 2)
        }
    }

    return (
        <div className="cart__item">
            <img src={item.images[0]} className="cart__item__image" />
            <h4 className="cart__item__title">{item.name}</h4>
            <div className="cart__item__commands">
                <img src={minus} className="cart__item__commands__img" onClick={() => handleClickDecrease(item)} />
                <span className="cart__item__commands__quantity">{item.quantity}</span>
                <img src={plus} className="cart__item__commands__img" onClick={() => handleClickIncrease(item)} />
            </div>
            <span className="cart__item__price">${item.price}</span>
            <img className="cart__item__remove" src={remove} onClick={() => handleClick(item)} />
        </div>
    )
}

export default CartItem;