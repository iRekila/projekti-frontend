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
        <div>
            <h3 id="order">Products for {categoryName}</h3>
            {products.map(product => (
                <div id="order_text" key={product.id} style={{ display: "inline-block", marginLeft: "auto", marginRight: "auto" }}>
                    <Link id="product" className="product" style={{ textDecoration: 'none' }} to={'/product/' + product.id}>
                        <div className="card" style={{ width: "20em", marginRight: "1.5em" }}>
                            <div className="card-body">
                            <img src={url + 'images/' + product.image} className="App-logo" alt="productimage" />
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><small className="text-muted">{product.price} €</small></p>
                            </div>
                        </div>
                    </Link>
                    <br />
                    <button className="btn btn-dark" type="button" onClick={e => addToCart(product)}>Add</button>
                </div>
            ))}
        </div>
    )
}