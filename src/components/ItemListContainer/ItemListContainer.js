import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getProductByCat } from "../../getData";
import ProductsList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {

        const onResize = ()=>{
            console.log("cambioo de tamaño pantalla")
        }
        window.addEventListener("resize", onResize)

        return () => window.removeEventListener("resize", onResize);
    }, [])

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCat : getData;
        asyncFunction(categoryId).then(res => {
            setData(res)
        })
    }, [categoryId])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{greeting}</h1>
            <ProductsList products={data} />
        </div>
    )
}
export default ItemListContainer;