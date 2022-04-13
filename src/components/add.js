import React, { useState } from 'react';
import axios from 'axios';

export default function Add({ url }) {
    const [name, setName] = useState('');
    const [slogan, setSlogan] = useState('');
    const [description, setDescription] = useState('');

    function addCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: name, slogan: slogan, description: description});
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type' : 'applications/json'
            }
        })
            .then((response) => {
                console.log(response)
            }).catch (error => {
                alert(error.response ? error.response.data.error : error);
            });
    };

    return (
        <form className="mt-5 mb-5" onSubmit={addCategory}>
            <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                <h2 id="order" style={{ textAlign: "center", display: "block" }}>ADD CATEGORY</h2>
            </div>
            <div className="form-outline mb-4">
                <h5 style={{ marginBottom: "1em" }}>Name</h5>
                <input type="text" name="name" id="form2Example1" className="form-control" placeholder="" value={name} onChange={e => setName(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4">
                <h5 style={{ marginBottom: "1em" }}>Slogan</h5>
                <input type="text" name="slogan" id="form2Example1" className="form-control" placeholder="" value={slogan} onChange={e => setSlogan(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4">
                <h5 style={{ marginBottom: "1em" }}>Description</h5>
                <input type="text" name="description" id="form2Example1" className="form-control" placeholder="" value={description} onChange={e => setDescription(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
            </div>
            <button className="btn btn-primary btn-block mb-4" style={{ width: "10em", display: "block"}}>Add</button>
        </form>
    )
}