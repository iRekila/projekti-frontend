import './App.css';
import Front from './pages/home.js';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import Readmore from './pages/readmore';
import NotFound from './pages/notfound';
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from './components/nav.js';
import Headers from './components/headers';
import Footer from './components/footer'
import Products from './components/products';

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
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>  

  );
}
export default App;