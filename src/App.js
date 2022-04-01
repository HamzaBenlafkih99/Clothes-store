import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import Annoucne from './components/Annoucne';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import ProductsPage from './pages/CategoryPage';

function App() {
  return (
    <>
      <Annoucne />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='checkout' element={<Cart />} />
        <Route path='categories/:category' element={<ProductsPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='products/:category/:productId' element={<ProductPage />} />
      </Routes>
      <NewsLetter />
    </>
  );
}

export default App;
