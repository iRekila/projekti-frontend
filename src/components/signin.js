import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <form className="mt-5 mb-5" style={{ textAlign: "center" }}>
            <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                <h2 id="order" style={{ textAlign: "center", display: "block" }}>SIGN IN</h2>
            </div>

            <div className="form-outline mb-4" style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                <input type="email" id="form2Example1" className="form-control" placeholder="Email Address" required />
            </div>

            <div className="form-outline mb-4" style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                <input type="password" id="form2Example2" className="form-control" placeholder="Password" required />
            </div>

            <button className="btn btn-primary btn-block mb-4" style={{ width: "10em", display: "block", marginLeft: "auto", marginRight: "auto" }}>Sign in</button>
            <div className="text-center">
                <p>Not a user? <Link to="/register">Register</Link></p>
            </div>
        </form>
    )
}