import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Front from './pages/Home';
import Products from './pages/Products';
import ManageCategories from './pages/ManageCategories';
import ManageProducts from './pages/ManageProducts';
import ViewOrders from './pages/ViewOrders';
import About from './pages/About';
import Contact from './pages/Contact';
import Readmore from './pages/ReadMore';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Headers from './components/Header';
import Footer from './components/Footer';
import Order from './pages/Order';


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

  function emptyCart() {
    setCart([]);
  }
  
  return (
    <>
      <Headers/>
      <Nav url={URL} cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Front url={URL} addToCart={addToCart} />} />
          <Route path="/search/:searchPhrase" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/about" element={<About url={URL} />} />
          <Route path="/contact" element={<Contact url={URL} />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/product/:productId" element={<Product url={URL} addToCart={addToCart}/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/order" element={<Order url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
          <Route path="/managecategories" element={<ManageCategories url={URL} />} />
          <Route path="/manageproducts" element={<ManageProducts url={URL} />} />
          <Route path ="/vieworders" element={<ViewOrders url={URL} />} />
        </Routes>
      </div> 
      <Footer/> 
    </>
  );
}
export default App;