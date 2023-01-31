import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../services/firebase/firebaseConfig"
import Loading from "../Loading/Loading";
import Slider from "../Slider/Slider";

const Home = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

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

    if(loading){
        return <Loading />
    }

    return (
        <>
            <Slider arr={images} autoSlide={true} />
        </>
    )
}

export default Home;