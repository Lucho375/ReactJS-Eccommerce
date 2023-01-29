import { db } from "./services/firebase/firebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from "./components/Button/Button";

const Prueba = () => {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {

    }, [values])

    const sendProd = () => {
        setDoc(doc(collection(db, "products")), {
            ...values
        }).then(setLoading(true))
            .catch(e => console.log(e))
        setTimeout(()=> setLoading(false) ,3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(values).length > 0) {
            sendProd()
            setValues({})
        }
    }

    const handleChange = (e) => {
        console.log(values);
        const name = e.target.name;
        const value = e.target.value;
        setValues(prev => (name === "images" ? { ...prev, [name]: [value] } : { ...prev, [name]: value }))
    }

    if (loading) return <h1>Cargando producto...</h1>

    return (
        <>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "left" }} onSubmit={handleSubmit}>
                <label>
                    Nombre del producto:
                    <input type="text" onChange={handleChange} name="name" value={values.name || ""} />
                </label>
                <label>
                    Categoria:
                    <input type="text" onChange={handleChange} name="category" value={values.category || ""} />
                </label>
                <label>
                    Marca:
                    <input type="text" onChange={handleChange} name="marca" value={values.marca || ""} />
                </label>
                <label>
                    Imagen:
                    <input type="text" onChange={handleChange} name="images" value={values.images || ""} />
                </label>
                <label>
                    Precio:
                    <input type="text" onChange={handleChange} name="price" value={values.price || ""} />
                </label>
                <label>
                    Stock:
                    <input type="text" onChange={handleChange} name="stock" value={values.stock || ""} />
                </label>
                <Button text="Cargar producto" />
            </form>
        </>
    )
}

export default Prueba;