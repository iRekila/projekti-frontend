import './App.css';
import Market from './market.js';
import Front from './home.js';
import Drinks from './drinks';
import Contact from './contact';
import Readmore from './readmore';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container'>
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