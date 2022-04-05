import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Readmore() {
  return (
    <div className="container">
        <div className="row">
          <div id="div_text" className="col-sm" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <h1>WHO WE ARE</h1>
            <a id="text2"> We were just a group of people who enjoyed craft beers and started to wonder if there would be a market to bring domestic craft beers to every beer lovers doorstep and there begun the idea for Finnish Bear Beer. <br></br><br></br>
            Our main goal with Finnish Bear Beer is to bring a large variety of different domestic craft brewery products for everyone to enjoy. You can choose craft beers from four different categories which are Pils, Pale Ale, Wheat beer and Lager. Every single one of the beers in our constantly changing selection is extraordinary in their own way and you can choose the ones for you to try. Join the community and start tasting exceptional craft beers!
            </a>
            <div className="container" id="rd">
              <Link to="/"><button type="button" id="readmore" data-toggle="collapse" data-target="#textbox">READ LESS</button></Link>
            </div>
          </div>
        </div>
      </div>
  )
}