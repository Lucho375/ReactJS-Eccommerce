import { createContext} from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const {addItem, isInCart, totalQuantity, cart, removeItemCart, total, clearCart, increaseQuantity, decreaseQuantity } = useCart()

    return (
        <CartContext.Provider 
        value={{ addItem, isInCart, totalQuantity, cart, removeItemCart, total, clearCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}