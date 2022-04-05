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
import Footer from './components/footer';
import Login from './components/signin';
import Register from './components/register';
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
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    } else {

    product['amount'] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }
   
  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id)
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }
  
  return (
    <>
      <Headers/>
      <Nav url={URL} cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/product/:productId" element={<Product url={URL}/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} />} />
        </Routes>
      </div> 
      <Footer/> 
    </>
  );
}
export default App;