import logo from './finnishbearbeer_logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Concert+One" rel="stylesheet"></link>
</head>

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
<header id="header"class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul id="header_text" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">HOME</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">MARKET</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">DRINKS</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">CONTACT</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">ABOUT BEER</a></li>
        
      </ul>
      <div id="header_text"class="col-md-3 text-end">
        <button type="button" class="btn btn-warning" id="cart_button">CART</button>
      </div>
    </header>




</html>
  );
}

export default App;
