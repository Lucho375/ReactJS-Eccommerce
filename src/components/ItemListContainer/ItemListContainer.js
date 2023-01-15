import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getProductByCat } from "../../getData";
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductByCat : getData;
        document.title = categoryId || "Ecommerce"
        asyncFunction(categoryId)
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{categoryId ? `Categoria:  ${categoryId} ` : greeting}</h1>
            {loading ? <Loading /> : <ItemList products={products} />}
        </div>
    )
}
export default ItemListContainer;