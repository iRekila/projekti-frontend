import axios from "axios";
import React, { useEffect, useState } from "react";
import uuid from 'react-uuid';


export default function Order({ url, cart, removeFromCart, updateAmount, emptyCart }) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    let sum = 0;
    let sum2 = 0;
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = React.createRef();
        }
    }, [cart.length])
    
    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])

    function order(e) {
        e.preventDefault();

        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        });
        axios.post(url + 'order/save.php', json,{
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        .then(() =>{
            emptyCart();
            setFinished(true);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (finished === false) {
        return (
            <div>
                <h1 className="header" id="order" style={{ marginTop: "1em" }}>ITEMS IN CART</h1>
                <table className="table">
                    <tbody>
                        {cart.map((product,index) => {
                            sum+=parseFloat((product.price * product.amount).toFixed(2));
                            sum2+=parseFloat(product.amount * 1)
                            return (
                                <tr id="order_text" key={uuid()}>
                                    <td>{product.name}</td>
                                    <td>{(product.price * product.amount).toFixed(2)} €</td>
                                    <td>
                                        <input type="number" min="0" ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                                    </td>
                                    <td> <a href="#" onClick={() => removeFromCart(product)}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="28px" height="28px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg></a> </td>
                                </tr>
                            )
                        })}
                        <tr id="order_text" key={uuid()}>
                            <td>All items</td>
                            <td>{sum.toFixed(2)} €</td>
                            <td>{sum2} x</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                {cart.length > 0 &&
                <>
                    <form onSubmit={order}>
    
                <div className="form-outline mb-4" style={{ width: "41em", marginTop: "3em" }}>
                    <h1 style={{ marginBottom: "1em" }} id="order">CLIENT INFORMATION</h1>
                </div>
                <div className="form-outline mb-4" style={{ width: "41em" }}>
    
                    <h4>Full name:</h4>
                    <input type="text" name="fname" id="form2Example1" className="form-control" placeholder="First name" required style={{ width: "15em", display: "inline-block", marginRight: "1em" }} onChange={e => setFirstname(e.target.value)}/>
                    <input type="text" name="lname" id="form2Example1" className="form-control" placeholder="Last name" required style={{ width: "15em", display: "inline-block" }} onChange={e => setLastname(e.target.value)}/>
                </div>
    
                <div className="form-outline mb-4" style={{ width: "41em" }}>
                    <h4>Address:</h4>
                    <input type="text" name="email" id="form2Example1" className="form-control" placeholder="Address" required style={{ width: "31em", display: "inline-block" }} onChange={e => setAddress(e.target.value)}/>
                </div>
    
                <div className="form-outline mb-4" style={{ width: "41em" }}>
                    <h4>Postal code:</h4>
                    <input type="text" id="form2Example1" className="form-control" placeholder="Postal code" required style={{ width: "31em", display: "inline-block" }} onChange={e => setZip(e.target.value)}/>
                </div>
    
                <div className="form-outline mb-4" style={{ width: "41em" }}>
                    <h4>City:</h4>
                    <input type="text" id="form2Example1" className="form-control" placeholder="City" required style={{ width: "31em", display: "inline-block" }} onChange={e => setCity(e.target.value)}/>
                </div>
    
    
                <div className="form-outline mb-4" style={{ width: "41em" }}>
                    <button className="btn btn-warning btn-block mb-4">ORDER</button>
                </div>
    
                    </form>
                </>
                }
            </div>
        )
    } else {
        return (<h3>Thank you for your order!</h3>);
    }
}