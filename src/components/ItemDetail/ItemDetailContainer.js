import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../getData";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [productId])

    return (
        <>
            {loading ? <Loading /> : <ItemDetail {...product}/> }
        </>
    )
}

export default ItemDetailContainer;