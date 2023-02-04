import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { NotificationContext } from "../../Context/NotificationContext"
import { createOrder } from "../../services/firebase/firestore/generateOrder";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);
    const [order, setOrder] = useState("");
    const navigate = useNavigate();
    const { values, errors, handleSubmit, handleChange } = useForm(() => validForm());
    const [error, setError] = useState("");
    const setNotification = useContext(NotificationContext);


    const validForm = () => {
        setLoading(true)
        createOrder(values, cart, total)
            .then(response => {
                if (response === "Hay productos sin stock") {
                    setError(response)
                    setNotification(response, "error", 4)
                } else {
                    setOrder(response)
                    setNotification("Gracias por su compra", "success", 4)
                    setTimeout(() => {
                        navigate("/")
                    }, 5000)
                }
                clearCart();
            })
            .finally(() => setLoading(false))
    }

    if (loading) {
        return <h1>Generando orden...</h1>
    }

    if (order) {
        return <h1>Numero de orden: {order}</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <form className="contact__form">
                <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Ingresa tu nombre"
                    errorMessage={errors.nameError}>
                    Nombre
                </Input>
                <Input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    placeholder="Ingresa tu apellido"
                    errorMessage={errors.lastNameError}>
                    Apellido
                </Input>
                <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Ingresa tu email"
                    errorMessage={errors.emailError}>
                    Email
                </Input>
                <Input
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="Ingresa tu Telefono"
                    errorMessage={errors.phoneError}>
                    Telefono
                </Input>
            </form>
            <Button onClick={(e) => handleSubmit(e)}>Generar orden.</Button>
        </>
    )
}


export default Checkout;