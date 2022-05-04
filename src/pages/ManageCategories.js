import React, { useState } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';

export default function ManageCategories({ url }) {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('file', file);
        formData.append('description', description);
        axios.post(url + 'products/addcategory.php', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
            .then((response) => {
                setName('');
                setFile(null);
                setDescription('');
                setAddingCategory(false);
                setSelectedCategory(response.data);
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            });
    };

    if (!addingCategory) {
        return (
            <>
                <div style={{ marginTop: "3em", width: "45em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h2 id="order" style={{ textAlign: "center", display: "block" }}>MANAGE CATEGORIES</h2>
                </div>
                <div style={{ marginBottom: "3em", width: "45em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h5 style={{ marginBottom: "1em" }}>Categories</h5>
                    <CategoryList url={url} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td><img src={url + 'images/' + selectedCategory?.image} className="App-logo" alt="productimage" style={{ marginTop: "1em", marginBottom: "1em" }} /></td>
                                    <td>{selectedCategory?.description}</td>
                                </tr>
                        </tbody>
                    </table>
                    <button className="btn-block mb-4" onClick={() => setAddingCategory(true)} style={{ width: "10em", display: "block", marginTop: "2em" }}>Add</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div style={{ marginTop: "3em", width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h2 id="order" style={{ textAlign: "center", display: "block" }}>ADD CATEGORY</h2>
                </div>
                <form className="mt-5 mb-5" onSubmit={saveCategory}>
                    <div className="form-outline mb-4">
                        <h5 style={{ marginBottom: "1em" }}>Name</h5>
                        <input type="text" name="name" id="form2Example1" className="form-control" placeholder="" value={name} onChange={e => setName(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
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
                    <button className="btn-block mb-4" type="button" onClick={() => setAddingCategory(false)} style={{ width: "10em", display: "block"}}>Cancel</button>
                    <button className="btn-block mb-4" type="submit" style={{ width: "10em", display: "block"}}>Save</button>
                </form>
            </>
        )
    }
}