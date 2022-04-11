import React, { useState } from 'react';
import axios from 'axios';

export default function Add({ url }) {
    const [name, setName] = useState('');

    function addCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: name});
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
            <div className="form-outline mb-4">
                <h5 style={{ marginBottom: "1em" }}>Category Name</h5>
                <input type="text" name="name" id="form2Example1" className="form-control" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} required style={{ width: "20em", display: "inline-block" }} />
            </div>
            <button className="btn btn-primary btn-block mb-4" style={{ width: "10em", display: "block"}}>Add</button>
        </form>
    )
}