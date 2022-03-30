import './App.css';
import Front from './pages/home.js';
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
import Order from './components/order';

const URL = 'http://localhost/verkkopalveluprojekti-backend/'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.tuotenro === product.tuotenro)) {
      const existingProduct = cart.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    } else {

    product['amount'] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
  }
   
  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.tuotenro !== product.tuotenro)
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
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
        <Route path="/*" element={<NotFound />} />
        <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>  

  );
}
export default App;