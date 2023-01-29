import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";
import Contact from "../components/Contact/Contact";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Prueba from "../Prueba";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>Inicio</h1>} />
            <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/prueba' element={<><h1 style={{ marginBottom: 20 }}>Subir producto</h1> <Prueba /></>} />
        </Routes>
    )
}

export default AppRoutes;