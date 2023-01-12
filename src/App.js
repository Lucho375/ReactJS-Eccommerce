import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {
BrowserRouter, 
Routes, 
Route
} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path='/products/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"}/>} />
          <Route path='/detail/:productId' element={<Card />} />
          <Route path='/contact' element={<h1>Contacto</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
