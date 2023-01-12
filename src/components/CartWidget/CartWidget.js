import widget from "./cart.svg"
const CartWidget = () => {
    return (
        <div style={{color: "white"}}>
            <img src={widget} alt="" style={{ width: "40px"}} />
            0
        </div>
    )
}

export default CartWidget;