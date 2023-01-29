import { useState } from "react"

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue)
    
    const resetInputs = ()=>{
        setValues(initialValue)
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues(prev => ({ ...prev, [name]: value }))
    }

    return {
        values,
        onChange,
        resetInputs
    }
}