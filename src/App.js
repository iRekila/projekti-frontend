import './App.css';
import Market from './pages/market.js';
import Front from './pages/home.js';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import Readmore from './pages/readmore';
import Nav from './components/nav';
import Footer from './components/footer';
import Headers from './components/headers';
import NotFound from './pages/notfound';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <Headers/>
      <Nav/>
      <Footer />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/market" element={<Market />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Readmore />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
  );
}
export default App;