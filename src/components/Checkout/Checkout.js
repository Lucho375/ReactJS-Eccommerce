import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "../../customHooks";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const [order, setOrder] = useState("")
    const navigate = useNavigate();
    const { values, onChange, resetInputs } = useForm({})

    const handleChange = (e) => {
        onChange(e)
    }

    const createOrder = async () => {
        if (Object.entries(values).length === 0) return console.error("error")
        setLoading(true)
        const objOrder = { buyer: values, items: cart, total }

        const batch = writeBatch(db);

        const ids = cart.map(prod => prod.id)
        const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
        const outOfStock = []
        const productsAddedToCartFromFirestore = await getDocs(productsRef);

        const { docs } = productsAddedToCartFromFirestore;

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;
            const productInCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productInCart.quantity
            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit();
            const orderRef = collection(db, 'orders',)
            const orderAdded = await addDoc(orderRef, objOrder)
            const { id } = orderAdded
            setOrder(id)
            clearCart();
            setLoading(false)
            resetInputs();
            setTimeout(() => {
                navigate("/")
            }, 5000)
        } else {
            console.error("hay productos sin stock");
        }
    }

    if (loading) {
        return <h1>Generando orden...</h1>
    }
    
    if(order){
        return <h2>Numero de orden: {order}</h2>
    }

    return (
        <>
            <h1>Checkout</h1>
            <form style={{ display: "flex", flexDirection: "column", padding: 50 }}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={handleChange} value={values.name || ""} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={values.email || ""} />

                <label htmlFor="phone">Telefono</label>
                <input type="tel" name="phone" onChange={handleChange} value={values.phone || ""} />

            </form>
            <button onClick={createOrder}>Generar orden</button>
        </>
    )
}


export default Checkout;