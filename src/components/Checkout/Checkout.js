import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "../../hooks/hooks";
import { db } from "../../services/firebase/firebaseConfig";
import Button from "../Button/Button";
import InputLabel from "../Contact/InputLabel";

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

    if (order) {
        return <h2>Numero de orden: {order}</h2>
    }

    return (
        <>
            <h1>Checkout</h1>
            <form className="contact__form">
                <InputLabel
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ""}
                    placeholder="Ingresa tu nombre">
                    Nombre
                </InputLabel>
                <InputLabel
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName || ""}
                    placeholder="Ingresa tu apellido">
                    Apellido
                </InputLabel>
                <InputLabel
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    placeholder="Ingresa tu email">
                    Email
                </InputLabel>
                <InputLabel
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone || ""}
                    placeholder="Ingresa tu Telefono">
                    Telefono
                </InputLabel>
            </form>
            <Button onClick={createOrder} text="Generar orden" />
        </>
    )
}


export default Checkout;