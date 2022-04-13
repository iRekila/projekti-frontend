import React, { useState } from 'react';
import axios from 'axios';

export default function Contact({ url }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendFeedback(e) {
    e.preventDefault();
    const json = JSON.stringify({fname: fname, lname: lname, email: email, message: message});
    axios.post(url + 'contact/feedback.php', json, {
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
    <div className="container">
      <div className="row" style={{ marginTop: "3.5em", marginBottom: "1em" }}>
        <div className="col">
          <form onSubmit={sendFeedback}>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h3 style={{ marginBottom: "1em" }}>CONTACT / FEEDBACK</h3>
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h5>Full Name</h5>
              <input type="text" name="fname" id="form2Example1" className="form-control" placeholder="First Name" value={fname} onChange={e => setFname(e.target.value)} required style={{ width: "15em", display: "inline-block", marginRight: "1em" }} />
              <input type="text" name="lname" id="form2Example1" className="form-control" placeholder="Last Name" value={lname} onChange={e => setLname(e.target.value)} required style={{ width: "15em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h5>Email Address</h5>
              <input type="text" name="email" id="form2Example1" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "31em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h5>Message</h5>
              <textarea name="message" id="form2Example1" className="form-control" value={message} onChange={e => setMessage(e.target.value)} required style={{ width: "31em", display: "inline-block", height: "15em" }}></textarea>
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <button className="btn btn-primary btn-block mb-4">Submit</button>
            </div>
          </form>
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

