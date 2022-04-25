import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react'
import sadcat from '../images/sadcat.png'
export default function NotFound() {
  return (
    <>
      <div id="notfound" className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <h1 style={{padding: '120px'}}>PAGE NOT FOUND</h1> 
        <img width={"350px"} style={{paddingTop: '50px'}} src={sadcat} id="sadcat"></img>
      </div>
      <div id="notfound" style={{paddingBottom: '60px'}} className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <Link to="/"><button style={{width:'200px', padding: '20px'}}>BACK TO HOMEPAGE</button></Link>
      </div>
    </>
  )
}
