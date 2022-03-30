import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../images/fg.png"
import axios from "axios";
import Cart from "./cart.js";

export default function Nav({ url,cart }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])

    return (
        <html>
            <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="container-fluid">
                <header id="header" className="">
                    <ul id="header_ul" className="nav col-12 col-md-auto mb-2 d-flex justify-content-between mb-md-0">
                        <li><Link to='/' style={{ textDecoration: 'none' }} ><a href="/" className="texts">HOME</a></Link></li>
                        <div className="dropdown">
                            <li className="market" style={{ textDecoration: 'none' }} id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SHOP
                            </li>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {categories.map(category => (
                                    <li><Link id="categories" to={'/products/' + category.id}>{category.name}</Link></li>
                                ))}
                            </div>
                        </div>
                        <li><Link to='/about' style={{ textDecoration: 'none' }}><a href="/about" className="texts" >ABOUT BEER</a></Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none' }}><a href="/contact" className="texts" >CONTACT</a></Link></li>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <Cart cart={cart} />
                    </ul>
                    <hr className="mt-4"></hr>
                </header>
            </div>
        </html >
    )
}