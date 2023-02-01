import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firebase/firestore/products";
import { useTitle } from "../../hooks/useTitle";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const getProductsWithCategory = () => getProducts(categoryId);
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId]);
    useTitle(categoryId || "Todos los productos", [categoryId])

    if (error) {
        return <h1>Hubo un error al cargar los productos.</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{categoryId ? `Categoria:  ${categoryId} ` : greeting}</h1>
            {loading ? <Loading /> : <ItemList products={products} />}
        </div>
    )
}
export default ItemListContainer;