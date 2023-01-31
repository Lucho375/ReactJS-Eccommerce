import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";
import Contact from "../components/Contact/Contact";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import Prueba from "../Prueba";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/prueba' element={<Prueba />} />
        </Routes>
    )
}

export default AppRoutes;