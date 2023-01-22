import { Link } from "react-router-dom";
import widget from "./cart.svg"
const CartWidget = ({ totalQuantity }) => {

    return (
        <Link to="./cart">
            <div style={{ color: "white" }}>
                <img src={widget} alt="" style={{ width: "40px" }} />
                {totalQuantity}
            </div>
        </Link>
    )
}

export default CartWidget;