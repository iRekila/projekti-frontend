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
                            <input className="form-control me-2" type="search" style={{ backgroundColor: '#ffffff', borderColor: '#1E261E' }} placeholder="Search products" aria-label="Search"/>
                            <button className="btn btn-primary" style={{ backgroundColor: '#ffffff', borderColor: '#1E261E' }} type="submit"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg></button>
                        </form>
                        <Cart cart={cart} />
                    </ul>
                    <hr className="mt-4"></hr>
                </header>
            </div>
        </html >
    )
}