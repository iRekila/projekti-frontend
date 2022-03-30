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
            <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <img src={logo} class="App-logo" alt="logo" />
            </div>
            <div className="container-fluid">
                <header id="header" class="">
                    <ul id="header_ul" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' style={{ textDecoration: 'none' }} ><a href="/" className="texts">HOME</a></Link></li>
                        <div class="dropdown">
                            <li className="market" style={{ textDecoration: 'none' }} id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SHOP
                            </li>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {categories.map(category => (
                                    <li>
                                        <Link
                                           id="categories" to={'/products/' + category.trnro}>{category.trnimi}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <li><Link to='/about' style={{ textDecoration: 'none' }}><a href="/about" class="texts" >ABOUT BEER</a></Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none' }}><a href="/contact" class="texts" >CONTACT</a></Link></li>
                        <Cart cart={cart} />
                    </ul>
                </header>
            </div>
        </html >
    )
}