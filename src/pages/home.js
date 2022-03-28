import wheat from '../images/wheat.jpg'
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <html>

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
            <div class="container">
              <Link to="/readmore"><button type="button" id="readmore" data-toggle="collapse" data-target="#textbox">READ MORE</button></Link>
            </div>
          </div>
        </div>
      </div>
    </html>
  )
}