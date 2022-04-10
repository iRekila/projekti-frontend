import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Product({ url, addToCart }) {
    const [product, setProduct] = useState('');

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproduct.php/' + params.productId)
            .then((response) => {
                const json = response.data;
                setProduct(json.product); 
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <img src={url + 'images/' + product.image} className="App-logo" alt="productimage" />
                </div>
                <div className="col-sm">
                    <div className="row">
                        <div className="col-sm">
                            <h2>{product.name}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h5>{product.price}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <button className="btn btn-dark" type="button" onClick={e => addToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}