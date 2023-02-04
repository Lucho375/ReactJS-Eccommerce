import { useState } from "react"

const Form = () => {
    const [nombre, setName] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {value} = e.target.name
        console.log(value);
        if(!value){
            console.log("Input vacio")
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre
                <input
                    type="text"
                    name="name"
                    style={{ display: "block", padding: 5, borderRadius: 5, backgroundColor: "grey", color: "white" }}
                    placeholder="Ingresa tu nombre"
                    onChange={handleChange}
                    value={nombre} />
            </label>
            <button type="submit">Click</button>
        </form>
    )
}

export default Form