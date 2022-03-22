import './App.css';
import Market from './components/market.js';
import Front from './components/home.js';
import Drinks from './components/drinks';
import Contact from './components/contact';
import Readmore from './components/readmore';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container'>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Concert+One" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans" rel="stylesheet"></link>
        </head>
        <Nav></Nav>
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