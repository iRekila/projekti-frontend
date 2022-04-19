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
              <h1 style={{ marginBottom: "1em", fontFamily: 'Concert One' }}>CONTACT / FEEDBACK</h1>
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h4>Full Name</h4>
              <input type="text" name="fname" id="form2Example1" className="form-control" placeholder="First Name" value={fname} onChange={e => setFname(e.target.value)} required style={{ width: "15em", display: "inline-block", marginRight: "1em" }} />
              <input type="text" name="lname" id="form2Example1" className="form-control" placeholder="Last Name" value={lname} onChange={e => setLname(e.target.value)} required style={{ width: "15em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h4>Email Address</h4>
              <input type="text" name="email" id="form2Example1" className="form-control" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "31em", display: "inline-block" }} />
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <h4>Message</h4>
              <textarea name="message" id="form2Example1" className="form-control" placeholder="Type your message here" value={message} onChange={e => setMessage(e.target.value)} required style={{ width: "31em", display: "inline-block", height: "15em" }}></textarea>
            </div>
            <div className="form-outline mb-4" style={{ width: "41em", marginLeft: "auto", marginRight: "auto" }}>
              <button className="btn btn-warning btn-block mb-4">Submit</button>
            </div>
          </form>
        </div>
        <div className="col">
          <h1 style={{ marginBottom: "1em", fontFamily: 'Concert One' }}>CUSTOMER SERVICE</h1>
          <p className='customer'>Customer service is open</p>
          <p className='customer'>Mon-Fri 9-19 and Sat 9-17</p>
          <p className='customer'>Phone: 000 0000000</p>
          <p className='customer'>Email: contact@finnishbeerbear.fi</p>
        </div>
      </div>
    </div>
    )
}

