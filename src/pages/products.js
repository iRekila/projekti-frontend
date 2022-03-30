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
                <div id="order_text" key={product.id}>
                    <Link id="product" className="product" style={{ textDecoration: 'none' }} to={'/product/' + product.id}>
                        <div class="card">
                            <div class="card-body">
                                IMAGE PLACEHOLDER
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">{product.price} €</small></p>
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