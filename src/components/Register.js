import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <form className="mt-5 mb-5">
                <div style={{ width: "30em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                    <h2 id="order" style={{ textAlign: "center", display: "block" }}>REGISTER</h2>
                </div>

                <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
                    <h5>Full Name</h5>
                    <input type="text" name="fname" id="form2Example1" className="form-control" placeholder="First Name" required style={{ width: "20em", display: "inline-block", marginRight: "1em" }} />
                    <input type="text" name="lname" id="form2Example1" className="form-control" placeholder="Last Name" required style={{ width: "20em", display: "inline-block" }} />
                </div>

                <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
                    <h5>Address</h5>
                    <input type="text" name="streetname" id="form2Example1" className="form-control" placeholder="Street Name" required style={{ width: "20em", display: "inline-block", marginRight: "1em" }} />
                    <input type="text" name="housenumber" id="form2Example1" className="form-control" placeholder="House Number" required style={{ width: "20em", display: "inline-block" }} />
                    <input type="text" name="zip" id="form2Example1" className="form-control" placeholder="Zip Code" required style={{ width: "20em", display: "inline-block", marginRight: "1em", marginTop: "1em" }} />
                    <input type="text" name="city" id="form2Example1" className="form-control" placeholder="City" required style={{ width: "20em", display: "inline-block", marginTop: "1em" }} />
                </div>

                <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
                    <h5>Phone Number</h5>
                    <input type="text" name="phonenumber" id="form2Example1" className="form-control" required style={{ display: "inline-block" }} />
                </div>

                <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
                    <h5>Email Address</h5>
                    <input type="text" name="email" id="form2Example1" className="form-control" required style={{ display: "inline-block" }} />
                </div>

                <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
                    <h5>Password</h5>
                    <input type="text" name="pw" id="form2Example1" className="form-control" required style={{ display: "inline-block" }} />
                </div>

                <button className="btn btn-primary btn-block mb-4" style={{ width: "10em", display: "block", marginLeft: "auto", marginRight: "auto" }}>Register</button>

                <div className="text-center">
                    <p>Already a user? <Link to="/signin">Sign in</Link></p>
                </div>
            </form>
    )
}