import logo from './fg.png';
import wheat from './wheat.jpg'
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Concert+One" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans" rel="stylesheet"></link>
      </head>




      <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <img src={logo} class="App-logo" alt="logo" />
      </div>
      <div class="container-fluid">
        <header id="header" class="">
          <ul id="header_ul" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to='/' style={{ textDecoration: 'none' }} ><a href="/" id="texts" class="px-2">HOME</a></Link></li>
            <li><Link to='/market' style={{ textDecoration: 'none' }}><a href="/market" id="texts" class="px-2">MARKET</a></Link></li>
            <li><Link to='/drinks' style={{ textDecoration: 'none' }}><a href="/drinks" id="texts" class="px-2">DRINKS</a></Link></li>
            <li><Link to='/contact' style={{ textDecoration: 'none' }}><a href="/contact" id="texts" class="px-2">CONTACT</a></Link></li>
            <li><Link to='/about' style={{ textDecoration: 'none' }}><a href="/about" id="texts" class="px-2">ABOUT BEER</a></Link></li>
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
            <a id="text1"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
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
  )

}

