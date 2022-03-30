import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react'
export default function NotFound() {
  return (
    <html>
    
      <div id="notfound" className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <h1>PAGE NOT FOUND</h1> 
      </div>
      <div id="notfound" className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <Link to="/"><button>RETURN</button></Link>
      </div>
    </html>
  )
}
