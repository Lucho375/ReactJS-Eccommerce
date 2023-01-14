import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {
BrowserRouter, 
Routes, 
Route
} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<h1>Contacto</h1>} />
          <Route path='/cart' element={<h1>Carrito</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
