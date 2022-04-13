import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Products({ url, addToCart }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');

    let params = useParams();

    useEffect(() => {
        let address = '';

        if (params.searchPhrase === undefined) {
            address = url + 'products/getproducts.php/' + params.categoryId;
        } else {
            address = url + 'products/searchproducts.php/' + params.searchPhrase;
        }

        axios.get(address)
            .then((response) => {
                const json = response.data;
                if (params.searchPhrase === undefined) {
                    setName(json.category);
                    setProducts(json.products);
                } else {
                    setName(params.searchPhrase);
                    setProducts(json);
                }
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])  

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
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em", marginBottom: "2em" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1 id="order" style={{ textAlign: "center", display: "block" }}>{categoryName}</h1>
                        
                    </div>
                </div>
                <div className="row">
                        {products.map(product => (
                            <div className="col-sm" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div id="order_text" key={product.id} style={{ marginLeft: "auto", marginRight: "auto" }}>
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
                                    <button className="btn btn-warning" type="button" onClick={e => addToCart(product)}>ADD TO CART</button>
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}