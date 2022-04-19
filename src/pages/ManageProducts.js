import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import uuid from 'react-uuid';

export default function ManageProducts({ url }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [addingProduct, setAddingProduct] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
            .then((response) => {
                const json = response.data;
                if (json) {
                    setProducts(json.products);
                }
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
        }
    }, [url,selectedCategory])

    function saveProduct(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('file', file);
        formData.append('description', description);
        formData.append('category_id', selectedCategory.id)
        axios.post(url + 'products/addproduct.php', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
            .then((response) => {
                const updatedProducts = [...products, response.data];
                setProducts(updatedProducts);
                setAddingProduct(false);
                setName('');
                setPrice('');
                setFile(null);
                setDescription('');
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            });
    };

    if (!addingProduct) {
        return (
            <>
                <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h2 id="order" style={{ textAlign: "center", display: "block" }}>MANAGE PRODUCTS</h2>
                    <CategoryList url={url} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <table className='table'>
                        <thead>
                            <tr key={uuid()}>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={uuid()}>
                                    <td>{product.name}</td>
                                    <td>{product.price}€</td>
                                    <td><img src={url + 'images/' + product.image} className="App-logo" alt="productimage" style={{ marginTop: "1em", marginBottom: "1em" }} /></td>
                                    <td>{product.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <button className="btn btn-primary btn-block mb-4" onClick={() => setAddingProduct(true)} style={{ width: "10em", display: "block", marginTop: "2em" }}>Add</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h2 id="order" style={{ textAlign: "center", display: "block" }}>ADD PRODUCT</h2>
                </div>
                <form className="mt-5 mb-5" onSubmit={saveProduct}>
                    <div className="form-outline mb-4">
                        <h5 style={{ marginBottom: "1em" }}>Name</h5>
                        <input type="text" name="name" id="form2Example1" className="form-control" placeholder="" value={name} onChange={e => setName(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
                    </div>
                    <div className="form-outline mb-4">
                        <h5 style={{ marginBottom: "1em" }}>Price</h5>
                        <input type="text" name="price" id="form2Example1" className="form-control" placeholder="" value={price} onChange={e => setPrice(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
                    </div>
                    <div className="form-outline mb-4">
                        <h5 style={{ marginBottom: "1em" }}>Image</h5>
                        <input type="file" name="file" id="form2Example1" className="form-control" placeholder="" onChange={e => setFile(e.target.files[0])} required style={{ width: "20em", display: "inline-block" }} />
                        {file != null ? (
                            <>
                                <p className="mt-3">Filename: {file.name}</p>
                                <p>Filetype: {file.type}</p>
                                <p>Filesize: {file.size}</p>
                            </>
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <div className="form-outline mb-4">
                        <h5 style={{ marginBottom: "1em" }}>Description</h5>
                        <input type="text" name="description" id="form2Example1" className="form-control" placeholder="" value={description} onChange={e => setDescription(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
                    </div>
                    <button className="btn btn-primary btn-block mb-4" type="button" onClick={() => setAddingProduct(false)} style={{ width: "10em", display: "block"}}>Cancel</button>
                    <button className="btn btn-primary btn-block mb-4" type="submit" style={{ width: "10em", display: "block"}}>Save</button>
                </form>
            </>
        )
    }
}