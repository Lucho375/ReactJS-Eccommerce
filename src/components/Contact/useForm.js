import { useState } from "react"

const useForm = e => {
    
    const [inputs, setInputs] = useState({
        name: "",
        lastName,
        email: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    return { handleChange, values };
}

export default useForm;