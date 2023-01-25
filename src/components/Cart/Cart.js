import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import remove from "./remove.png";
import Button from "../Button/Button";
import "./Cart.css";
import { NotificationContext } from "../Notification/NotificationService";
import { Link } from "react-router-dom";
const Cart = () => {

    const { cart, removeItemCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleClick = (e) => {
        removeItemCart(e.id)
        setNotification(`Borrado ${e.name} del carrito`, "success", 2)
    }

    if (cart.length === 0) return <h1>Carrito vacio, agregar productos</h1>
    
    return (
        <section className="cart__container">
            <h1 className="cart__container__title">Productos en el carrito</h1>
            <table className="cart__container__table">
                <thead>
                    <tr className="cart__table__headers">
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((e, i) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.quantity}</td>
                            <td>${e.price * e.quantity}</td>
                            <td><img style={{ cursor: "pointer" }} src={remove} onClick={() => handleClick(e)} alt={e.name}/></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
                <h2>Total a pagar: ${cart.reduce((acum, e) => (e.price * e.quantity) + acum, 0)}</h2>
                <Link to="/checkout"><Button text={"Finalizar compra"}></Button></Link>
            </div>
        </section>
    )
}

export default Cart