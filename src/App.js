import './App.css';
import Front from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Readmore from './pages/readmore';
import Product from './pages/product';
import NotFound from './pages/notfound';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from './components/nav';
import Headers from './components/headers';
import Footer from './components/footer'

const URL = 'http://localhost/verkkopalveluprojekti-backend/'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
   
  
  return (
    
    <div className='container'>
      <Headers/>
      <Footer/>
      <Nav url={URL} cart={cart}/>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/product/:productId" element={<Product url={URL}/>} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>  

  );
}
export default App;