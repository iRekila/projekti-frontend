import './App.css';
import Market from './market.js';
import Front from './home.js';
import Drinks from './drinks';
import About from './about';
import Contact from './contact';
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
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );

  
}
export default App;