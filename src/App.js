import './App.css';
import Market from './pages/market.js';
import Front from './pages/home.js';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import Readmore from './pages/readmore';
import NotFound from './pages/notfound';
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <div className='container'>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/market" element={<Market />} />
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