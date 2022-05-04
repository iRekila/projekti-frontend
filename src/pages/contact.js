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
              <button className="btn-block mb-4">Submit</button>
            </div>
          </form>
        </div>
        <div className="col">
          <div className="row">
          <h1 style={{ marginBottom: "1em", fontFamily: 'Concert One' }}>CUSTOMER SERVICE</h1>
          <p className='customer'>Customer service is open</p>
          <p className='customer'>Mon-Fri 9-19 and Sat 9-17</p>
          <p className='customer'>Phone: 000 0000000</p>
          <p className='customer'>Email: contact@finnishbeerbear.fi</p>
          </div>
          <div className="row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53886.86632443504!2d25.418744817303274!3d65.03494147415142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd52c7bb803d%3A0x40f55b6d25f0d1db!2sOulun%20ammattikorkeakoulu!5e0!3m2!1sfi!2sfi!4v1650911735747!5m2!1sfi!2sfi" style={{ height:"450px", paddingBottom:"50px", paddingTop:"20px"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    )
}

