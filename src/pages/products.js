import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Products({ url, addToCart }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
            .then((response) => {
                const json = response.data;
                setCategoryName(json.category);
                setProducts(json.products);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])

    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em", marginBottom: "3em" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2 id="order" style={{ textAlign: "center", display: "block" }}>{categoryName}</h2>
                    </div>
                </div>
                <div className="row">
                        {products.map(product => (
                            <div className="col-sm" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div id="order_text" key={product.id} style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <Link id="product" className="product" style={{ textDecoration: 'none' }} to={'/product/' + product.id}>
                                    <div className="card" style={{ width: "18em", paddingLeft: "auto", paddingRight: "auto" }}>
                                        <div className="card-body">
                                            <img src={url + 'images/' + product.image} className="App-logo" alt="productimage" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                                            <h5 className="card-title" style={{ textAlign: "center" }}>{product.name}</h5>
                                            <p className="card-text" style={{ textAlign: "center" }}><small className="text-muted">{product.price} €</small></p>
                                        </div>
                                    </div>
                                </Link>
                                <br />
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button className="btn btn-dark" type="button" onClick={e => addToCart(product)}>Add To Cart</button>
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}