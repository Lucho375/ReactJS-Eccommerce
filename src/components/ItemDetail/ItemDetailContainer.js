import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getProductById } from "../../services/firebase/firestore/products";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const { data: product, error, loading } = useAsync(() => getProductById(productId), [productId])

    if (error) {
        return <h1>Hubo un error al cargar el producto.</h1>
    }
    return (
        <>
            {loading ? <Loading /> : <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer;