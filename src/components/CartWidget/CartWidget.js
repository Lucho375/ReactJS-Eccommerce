import { Link } from "react-router-dom";
import widget from "./cart.svg"
import "./CartWidget.scss"

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to="./cart">
            <div>
                <img src={widget} alt="cart logo" className="cart__logo" />
                { totalQuantity ? <div className="cart__qty" data-count={totalQuantity}></div> : null}
            </div>
        </Link>
    )
}

export default CartWidget;