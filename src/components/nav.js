import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../images/fg.png"
import axios from "axios";
import Cart from "./Cart.js";

export default function Nav({ url,cart }) {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])

    function executeSearch(e) {
        if (e.charCode === 13) {
            e.preventDefault();
            navigate('/search/' + search);
            setSearch("");
        }
    }

    return (
        <>
            <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <img src={logo} className="App-logo" alt="logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            </div>
            <div className="container-fluid">
                <header id="header" className="">
                    <ul id="header_ul" className="nav col-12 col-md-auto mb-2 d-flex justify-content-between mb-md-0">
                        <li><Link to='/' style={{ textDecoration: 'none' }} ><p className="texts">HOME</p></Link></li>
                        <div className="dropdown">
                            <li className="market" style={{ textDecoration: 'none' }} id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SHOP
                            </li>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ padding: "12px"}}>
                                {categories.map(category => (
                                    <li><Link id="categories" to={'/products/' + category.id}>{category.name}</Link></li>
                                ))}
                            </div>
                        </div>
                        <li><Link to='/about' style={{ textDecoration: 'none' }}><p className="texts" >ABOUT BEER</p></Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none' }}><p className="texts" >CONTACT</p></Link></li>
                        <form className="d-flex" onSubmit={(e) => executeSearch(e)}>
                            <input
                                className="form-control me-2"
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={(e) => executeSearch(e)}
                                style={{ backgroundColor: '#ffffff', borderColor: '#1E261E' }}
                                placeholder="Search products"
                                aria-label="Search"
                            />
                        </form>
                        <div className="dropdown">
                            <li className="market" style={{ textDecoration: 'none' }} id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie3UMUoDYRDF8Z8psqUpLBRrBS+gx7ATD6E5iSjeQQ/gJUzEwmChnZZaKZiQ0ljsLkhQM5/5Agr74DX7DfOfgZ1Hoz+qAl30Marcx2H1thCtY4DJN76parKqmAH9DM+6eTcArX2QE3yVAO7lBA8TwMNIw6UgeJI46My+rWCjUQL0LVIUBd8lgEO1UfBZAvg8oXamCuWNRu64nRNMmUo/wReSXLXayoDoKc9miMvqW/ZNG2VRNLla2MYudrCFTvX2intlnl/gGu/zDraGYzyLZ/UTjrD6G2AHpxgnAKc9xgmWo9BNPM4BnPYDNiLg24zQ2oNpyFdZvRKZLlGhnvvKPzXXti/Yy7hEo3+iD9EHtgdqxQnwAAAAAElFTkSuQmCC"/>
                                <h3 id="log">ADMIN</h3>
                            </li>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ padding: "12px"}}>
                                <li><Link id="categories" to="/managecategories">CATEGORIES</Link></li>
                                <li><Link id="categories" to="/manageproducts">PRODUCTS</Link></li>
                                <li><Link id="categories" to="/vieworders">ORDERS</Link></li>
                            </div>
                        </div>
                        <Cart cart={cart} />
                    </ul>
                    <hr className="mt-4"></hr>
                </header>
            </div>
        </>
    )
}
