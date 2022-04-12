import '../App.css';
import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "3.5em", marginBottom: "1em" }}>
        <div className="col">
          <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
            <h3 style={{ marginBottom: "1em" }}>CONTACT / FEEDBACK</h3>
          </div>
          <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
            <h5>Full Name</h5>
            <input type="text" name="fname" id="form2Example1" className="form-control" placeholder="First Name" required style={{ width: "15em", display: "inline-block", marginRight: "1em" }} />
            <input type="text" name="lname" id="form2Example1" className="form-control" placeholder="Last Name" required style={{ width: "15em", display: "inline-block" }} />
          </div>
          <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
            <h5>Email Address</h5>
            <input type="text" name="email" id="form2Example1" className="form-control" required style={{ width: "31em", display: "inline-block" }} />
          </div>
          <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
            <h5>Message</h5>
            <textarea name="message" id="form2Example1" className="form-control" required style={{ width: "31em", display: "inline-block", height: "15em" }}></textarea>
          </div>
          <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
            <button className="btn btn-primary btn-block mb-4">Submit</button>
          </div>
        </div>
        <div className="col">
          <h3 style={{ marginBottom: "1em" }}>CUSTOMER SERVICE</h3>
          <p>Customer service is open</p>
          <p>Mon-Fri 9-19 and Sat 9-17</p>
          <p>Phone: 000 0000000</p>
          <p>Email: contact@finnishbeerbear.fi</p>
        </div>
      </div>
    </div>
    )
}

