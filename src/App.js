import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './components/Notification/NotificationService';
import AppRoutes from './Routes/AppRoutes';
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className='App'>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
