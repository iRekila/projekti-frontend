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
                    <img src={url + 'images/' + product.image} className="productimage" alt="productimage" />
                </div>
                <div className="col-sm">
                    <div className="row" style={{textAlign: "center"}}>
                        <div className="col-sm">
                            <h1 className='name'>{product.name}</h1>
                        </div>
                    </div>
                    <div className="row" style={{textAlign: "center"}}>
                        <div className="col-sm">
                            <h2 className='price'>{product.price} €</h2>
                        </div>
                    </div>
                    <div className="row" style={{textAlign: "center"}}>
                        <div className="col-sm">
                            <p className='customer'>{product.description}</p>
                        </div>
                    </div>
                    <div className="row" style={{textAlign: "center", marginTop: "2em"}}>
                        <div className="col-sm">
                        <button id="btn" type="button" onClick={e => addToCart(product)}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}