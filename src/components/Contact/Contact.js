import { useContext } from "react";
import { useTitle } from "../../hooks/useTitle";
import { NotificationContext } from "../../Context/NotificationContext";
import Button from "../Button/Button";
import "./Contact.scss";
import InputLabel from "./InputLabel";
import { useForm } from "../../hooks/useForm";

const initialForm = 
{
    name: "",
    lastName: "",
    email: "",
    message: "hola"
}

const Contact = () => {
    const setNotification = useContext(NotificationContext)
    const { values, onChange , resetInputs, validForm } = useForm(initialForm)
    useTitle("Contacto", []);


    const handleSubmit = (e) => {
        e.preventDefault();
        validForm(e)
        // validateForm(e)
        // setNotification("Enviado", "success", 3)
        // setValues({})
    }

    return (
        <>
            <h1>Contact</h1>
            <form className="contact__form">
                <InputLabel
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={values.name || ""}
                    placeholder="Ingresa tu nombre">
                    Nombre
                </InputLabel>
                <InputLabel
                    type="text"
                    name="lastName"
                    onChange={onChange}
                    value={values.lastName || ""}
                    placeholder="Ingresa tu apellido">
                    Apellido
                </InputLabel>
                <InputLabel
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email || ""}
                    placeholder="Ingresa tu email">
                    Email
                </InputLabel>
                <textarea
                    name="message"
                    rows="10"
                    cols="38"
                    onChange={onChange}
                    placeholder="Dejanos tu mensaje">
                </textarea>
                <Button onClick={handleSubmit} >Enviar</Button>
            </form>
        </>
    )
}

export default Contact;