import './App.css';
import Front from './pages/home.js';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import Readmore from './pages/readmore';
import NotFound from './pages/notfound';
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/nav.js';
import Headers from './components/headers';
import Footer from './components/footer'


const URL = 'http://localhost/verkkopalveluprojekti-backend/'
function App() {

  return (
    
    <div className='container'>
      <Headers/>
      <Footer/>
      <Nav url={URL}/>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>  

  );
}
export default App;