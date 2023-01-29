import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => {
                return [...prev, productToAdd]
            })
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity;
        })
        return accu
    }

    const removeItemCart = (id) => {
        const itemRemoved = cart.filter(e => e.id !== id)
        setCart(itemRemoved)
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseQuantity = (product) => {
        setCart(cart => cart.map((e) =>
            product.id === e.id ? { ...e, quantity: e.quantity + (e.quantity < product.stock ? 1 : 0) } : e
        ))
    }

    const decreaseQuantity = (product) => {
        setCart(cart => cart.map((e) =>
            product.id === e.id ? { ...e, quantity: e.quantity - (e.quantity > 1 ? 1 : 0) } : e
        ))
    }

    const totalQuantity = getTotalQuantity();

    const total = getTotal()

    return (
        <CartContext.Provider value={{ addItem, isInCart, totalQuantity, cart, removeItemCart, total, clearCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}