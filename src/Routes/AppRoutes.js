import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AppRoutes;