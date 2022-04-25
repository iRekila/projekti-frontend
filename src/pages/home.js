import wheat from '../images/wheat.jpg'
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm">
              <img src={wheat} id="wheat"></img>
            </div>
            <div className="col-sm" id="div_text" style={{ paddingLeft: "0", paddingRight: "0" }}>
              <h1 style={{ marginBottom: "1em" }}>WHO WE ARE</h1>
              <a id="text1">
                Finnish Bear Beer is a company providing domestic craft brewery products. We offer constantly changing products for people who are just as passionate about supporting domestic companies as we are. 
              </a>
              <div className="container" id="rd" style={{ marginTop: "0.5em" }}>
                <Link to="/readmore"><button type="button" id="readmore" data-toggle="collapse" data-target="#textbox">READ MORE</button></Link>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <h2 style={{ margin: "1em", textAlign:"center", fontFamily:"Concert One", fontSize:"45px" }}>NEW</h2>
          </div>
        </div>
      </div>
  )
}