import { useContext } from "react";
import { useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { NotificationContext } from "../Notification/NotificationService";
import Button from "../Button/Button";
import "./Contact.scss";
import InputLabel from "./InputLabel";

const Contact = () => {
    const [inputs, setInputs] = useState({})
    // const [error, setError] = useState()
    const setNotification = useContext(NotificationContext)
    useTitle("Contacto", []);

    const handleChange = (e) => {
        const { name, value } = e.target
        validateForm(e)
        setInputs(values => ({ ...values, [name]: value }))
    }

    const validateForm = (e) => {
        //Control para el nombre vacio
        if (e.target.name === "name" && e.target.value === "") {
            console.log("input Nombre vacio")
        }

        // if(!e.target.value.match(/[a-zA-Z]+/g)){
        //     console.error("No se permiten numeros")
        // }

        //validar length del mensaje
        if (e.target.value.length >= 140) {
            console.log("excedido de caracterecs")
        }
    }

    const handleSubmit = (e) => {
        // validateForm(e)
        setNotification("Enviado", "success", 3)
        setInputs({})
        e.preventDefault();
    }

    return (
        <>
            <h1>Contact</h1>
            <form className="contact__form">
                <InputLabel
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={inputs.name || ""}
                    placeholder="Ingresa tu nombre">
                    Nombre
                </InputLabel>
                <InputLabel
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={inputs.lastName || ""}
                    placeholder="Ingresa tu apellido">
                    Apellido
                </InputLabel>
                <InputLabel
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={inputs.email || ""}
                    placeholder="Ingresa tu email">
                    Email
                </InputLabel>
                <textarea
                    name="message"
                    rows="10"
                    cols="38"
                    onChange={handleChange}
                    placeholder="Dejanos tu mensaje">
                </textarea>
                <Button text="Enviar" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default Contact;