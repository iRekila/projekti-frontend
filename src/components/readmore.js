import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Readmore() {
  return (
    <html>
      <div class="container">
        <div class="row">
          <div id="div_text" class="col-sm">
            <h1>WHO WE ARE</h1>
            <a id="text2"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci
              tation ullamcorp                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </a>
            <div class="container">
              <Link to="/"><button type="button" id="readmore" data-toggle="collapse" data-target="#textbox">READ LESS</button></Link>     
            </div>
          </div>
        </div>
      </div>
    </html>
  )

}

