import './App.css';
import Market from './components/market.js';
import Front from './components/home.js';
import Drinks from './components/drinks';
import Contact from './components/contact';
import Readmore from './components/readmore';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Headers from './components/headers';

function App() {
  return (
    <>
      <div className='container'>
        <Headers />
        <Nav />
        <Footer />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/market" element={<Market />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Readmore />} />
        </Routes>
      </div>
    </>
  );
}
export default App;