import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function About({ url }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php/')
            .then((response) => {
                const json = response.data;
                setCategories(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])

    return (
      <div className="container">
        {categories.map(category => (
          <div className="row" style={{ marginTop: "3em", marginBottom: "3em" }}>
            <div className="col-sm">
              <img src={url + 'images/' + category.image} className="App-logo" alt="categoryimage" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            </div>
            <div className="col-sm">
              <div className="row" style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                <div className="col-sm">
                  <h2>{category.name}</h2>
                </div>
              </div>
              <div className="row" style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                <div className="col-sm">
                  <h5>{category.slogan}</h5>
                </div>
              </div>
              <div className="row" style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                <div className="col-sm">
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                <div className="col-sm">
                  <Link to={'/products/' + category.id}><button className="btn btn-dark" type="button">See Products</button></Link>
                </div>
              </div>
            </div>
        </div>
        ))}
    </div>
    )
}

