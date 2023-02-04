import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useTitle } from "../../hooks/useTitle";
import { db } from "../../services/firebase/firebaseConfig"
import Form from "../Form";
import Loading from "../Loading/Loading";
import Slider from "../Slider/Slider";

const Home = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle("Ecommerce");
    useEffect(() => {
        setLoading(true)
        const database = collection(db, "products")
        const productsFromFirestore = database
        getDocs(productsFromFirestore).then(response => {
            const { docs } = response;
            const firestoreImages = docs.map(doc => {
                const data = doc.data()
                const { images } = data
                return images;
            })
            const arr = firestoreImages.map(e => e[0])
            setImages(arr)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <h1>Bienvenido</h1>
            <h2>Ultimos ingresos</h2>
            <Slider arr={images} autoSlide={true} />
        </>
    )
}

export default Home;