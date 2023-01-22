import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './components/Notification/NotificationService';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className='App'>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<h1>Inicio</h1>} />
              <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/contact' element={<h1>Contacto</h1>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<h1>Checkout</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
