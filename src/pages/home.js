import wheat from '../images/wheat.jpg'
import '../App.css';
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Front({ url, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getnewproducts.php')
        .then((response) => {
          const json = response.data
            setProducts(json)
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
  }, [])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em", marginBottom: "5em" }}>
            <div className="container">
              <div className="row mt-5">
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
                <div className="row">
                    <div className="col-sm">
                        <h1 id="order" style={{ textAlign: "center", display: "block" }}>NEW PRODUCTS</h1>
                    </div>
                </div>
                <div className="row">
                    {products.map(product => (
                        <div className="col-sm" key={product.id} style={{ display: "flex", justifyContent: "space-between" }}>
                            <div id="order_text"  style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <Link id="product" className="product" style={{ textDecoration: 'none' }} to={'/product/' + product.id}>
                                    <div className="card" style={{ width: "11em", height: "auto", paddingLeft: "auto", paddingRight: "auto", marginTop: "1em" }}>
                                        <div className="card-body">
                                            <img src={url + 'images/' + product.image} className="App-logo" alt="productimage" style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "0", marginBottom: "1em" }}></img>
                                            <h5 className="card-title" style={{ textAlign: "center" }}>{product.name}</h5>
                                            <p className="card-text" style={{ textAlign: "center" }}><small className="text-muted">{product.price} €</small></p>
                                        </div>
                                    </div>
                                </Link>
                                <br />
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
                                    <button type="button" style={{ fontSize: "0.75em" }} onClick={() => addToCart(product)}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}