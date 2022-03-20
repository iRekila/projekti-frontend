import logo from './fg.png';
import wheat from './wheat.jpg'
import './App.css';

function App() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Concert+One" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Concert+One" rel="stylesheet"></link>
      </head>


      <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <img src={logo} class="App-logo" alt="logo" />
      </div>
      <div class="container-fluid">
        <header id="header" class="">
          <ul id="header_text" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="px-2">HOME</a></li>
            <li><a href="#" class="px-2">MARKET</a></li>
            <li><a href="#" class="px-2">DRINKS</a></li>
            <li><a href="#" class="px-2">CONTACT</a></li>
            <li><a href="#" class="px-2">ABOUT BEER</a></li>
          </ul>
        </header>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src={wheat} id="wheat"></img>
          </div>
          <div id="div_text" class="col-sm">
            <h1>WHO WE ARE</h1>
            <a> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci
              tation ullamcorp
            </a>
            <div id="readmore_div"><button type="button" id="readmore">READ MORE</button></div>
          </div>
        </div>
      </div>
      <footer class="bg-dark text-white text-center text-lg-start fixed-bottom">

        <div id="footer" class="text-center p-3" >
          © 2022 Copyright: sg3
          <a class="text-dark"></a>
        </div>

      </footer>
    </html>
  );
}

export default App;
