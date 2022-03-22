import { Link } from "react-router-dom"
import logo from "./fg.png"

export default function Nav() {
    return (
        <html>
            <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <img src={logo} class="App-logo" alt="logo" />
            </div>
            <div class="container-fluid">
                <header id="header" class="">
                    <ul id="header_ul" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' style={{ textDecoration: 'none' }} ><a href="/" id="texts" class="px-2">HOME</a></Link></li>
                        <li><Link to='/market' style={{ textDecoration: 'none' }}><a href="/market" id="texts" class="px-2">MARKET</a></Link></li>
                        <li><Link to='/drinks' style={{ textDecoration: 'none' }}><a href="/drinks" id="texts" class="px-2">DRINKS</a></Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none' }}><a href="/contact" id="texts" class="px-2">CONTACT</a></Link></li>
                    </ul>
                </header>
            </div>
        </html>
    )
}