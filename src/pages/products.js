import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Products({ url, addToCart }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    const [searchName, setSearchName] = useState('');

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
                setSearchName("");
                const json = response.data;
                if (params.searchPhrase === undefined) {
                    setCategoryName(json.category);
                    setProducts(json.products);
                } else {
                    setSearchName(params.searchPhrase);
                    setProducts(json);
                    setCategoryName("");
                }
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])  


    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em", marginBottom: "2em" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1 id="order" style={{ textAlign: "center", display: "block" }}>{categoryName}{searchName}</h1>
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
                                            <p className="card-text" style={{ textAlign: "center" }}><small className="text-muted">{product.price} ???</small></p>
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
    )
}