import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const database = collection(db, "products")
        const productsQuery = where('category', '==', categoryId)
        const productsFromFirestore = categoryId ? query(database, productsQuery ) : database

        getDocs(productsFromFirestore).then(response => {
            const { docs } = response;
            const firestoreProducts = docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(firestoreProducts);
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{categoryId ? `Categoria:  ${categoryId} ` : greeting}</h1>
            {loading ? <Loading /> : <ItemList products={products} />}
        </div>
    )
}
export default ItemListContainer;