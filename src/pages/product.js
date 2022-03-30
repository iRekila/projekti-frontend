import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Product({url}) {
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
        <div>
            <h3>Product {product}</h3>
            {product.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    )
}