import { useState } from "react"

export const useForm = (initialValue = {}) => {
    const [values, setValues] = useState(initialValue);

    const resetInputs = () => {
        setValues(initialValue)
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues(({ ...values, [name]: value }))
        console.log(values);
    }

    return {
        values,
        onChange,
        resetInputs,
    }
}

