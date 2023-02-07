import { useState } from "react"

export const useForm = (validForm) => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    })
    const [errors, setErrors] = useState({
        nameError: false,
        lastNameError: false,
        emailError: false,
        phoneError: false,
    })

    const validateForm = (e) => {
        const input = e.target.value;
        const pattern = /^[A-Za-z]+(\s*[A-Za-z]+)*$/g
        const emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

        if (e.target.name === "name") {
            // Si coincide con la expresion regular, sin errores
            if (pattern.test(input)) {
                setErrors(prev => ({ ...prev, nameError: false }))
            }
            else {
                setErrors(prev => ({ ...prev, nameError: true }))
                return false
            }
        }

        if (e.target.name === "lastName") {
            // Si coincide con la expresion regular, sin errores
            if (pattern.test(input)) {
                setErrors(prev => ({ ...prev, lastNameError: false }))
            } else {
                setErrors(prev => ({ ...prev, lastNameError: true }))
                return false
            }
        }

        if (e.target.name === "email") {
            // Si coincide con la expresion regular, sin errores
            if (emailPattern.test(input)) {
                setErrors(prev => ({ ...prev, emailError: false }))
            } else {
                setErrors(prev => ({ ...prev, emailError: true }))
                return false
            }
        }

        if (e.target.name === "phone") {
            // Si coincide con la expresion regular, sin errores
            if (phonePattern.test(input)) {
                setErrors(prev => ({ ...prev, phoneError: false }))
            } else {
                setErrors(prev => ({ ...prev, phoneError: true }))
                return false
            }
        }
        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
        validateForm(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.name || !values.lastName || !values.email || !values.phone) {
            setErrors(prev => ({ ...prev, nameError: true, lastNameError: true, emailError: true, phoneError: true }))
        } else {
            if ((errors.nameError, errors.lastNameError, errors.emailError, errors.phoneError) === false) {
                validForm()
            }
        }
    }
    
    return {
        values,
        errors,
        handleSubmit,
        handleChange,
    }
}
