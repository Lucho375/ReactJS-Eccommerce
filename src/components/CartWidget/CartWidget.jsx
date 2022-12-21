import widget from "./cart.svg"
const CartWidget = () => {
    return (
        <div style={{backgroundColor: "white", padding: "10px"}}>
            <img src={widget} alt="" style={{ width: "30px"}} />
            0
        </div>
    )
}

export default CartWidget;