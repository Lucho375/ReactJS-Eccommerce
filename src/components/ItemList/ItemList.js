import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Item from "../Item/Item";
import "./ItemList.scss"

const ItemList = ({ products }) => {
    return (
        <>
            <CategoryFilter />
            <ul className="product__list">
                {
                    products.map(prod => <Item key={prod.id} {...prod} />)
                }
            </ul>
        </>
    )
}

export default ItemList;