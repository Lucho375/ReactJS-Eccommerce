import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const { productId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", productId)
        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdaptated = { id: response.id, ...data }
            setProduct(productAdaptated)
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [productId])

    return (
        <>
            {loading ? <Loading /> : <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer;