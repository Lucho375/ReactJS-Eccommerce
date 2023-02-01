import { useState } from "react"

export const useForm = (initialValue = {}) => {

    const [values, setValues] = useState(initialValue);
    const [error, setError] = useState({});

    const resetInputs = () => {
        setValues(initialValue)
    }

    const validForm = (event) => {
        console.log(values)
        // Letras a - z
        let a_z = /[^a-z]+/g;
        // Email
        let em = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        // Si el input del nombre esta vacio o contiene caracteres invalidos.
        if ((values.name == "") || (values.name.toLowerCase().match(a_z))) {
            setError(...error, {[values.name] : "Error en nombre"})
        }
    
        // Si el input del apellido esta vacio o contiene caracteres invalidos.
        // if ((values.lastName == "") || (values.lastName.toLowerCase().match(a_z))) {
        //     setError("error")
        // }
    
        // Si el input del email esta vacio o contiene caracteres invalidos.
        // if ((!values.email.match(em)) || (values.email == "")) {
        //     setError(...error , {[values.email] : error})
        // }
        console.log(error)
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues(({ ...values, [name]: value }))
        console.log(values);
        // validForm(e)
    }

    return {
        values,
        onChange,
        resetInputs,
        validForm,
        error
    }
}

