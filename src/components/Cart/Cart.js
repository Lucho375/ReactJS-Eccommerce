import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <section className="cart__container">
            {cart.length === 0 ?
                <>
                    <h1 className="cart__container__title">No hay productos en el carrito.</h1>
                    <Link to="/products">
                        <Button text="Seguir comprando" />
                    </Link>
                </>
                :
                <>
                    <h1 className="cart__container__title">
                        Productos en el carrito
                    </h1>
                    {cart.map(product => (<CartItem {...product} key={product.id} />))}
                    <div className="cart__container__total">
                        <h2>
                            Total a pagar: ${cart.reduce((acum, e) => (e.price * e.quantity) + acum, 0)}
                        </h2>
                        <Link to="/checkout">
                            <Button text={"Finalizar compra"}></Button>
                        </Link>
                    </div>
                </>
            }
        </section>
    )
}

export default Cart