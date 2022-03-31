import React, { useEffect, useState } from "react";
import uuid from 'react-uuid';


export default function Order({ cart,removeFromCart,updateAmount }) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    let sum = 0
    let sum2 = 0

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

    return (

        <div>
            <h3 className="header" id="order">ITEMS IN CART</h3>
            <table className="table">
                <tbody>
                    {cart.map((product,index) => {
                        sum+=parseFloat((product.price * product.amount).toFixed(2));
                        sum2+=parseFloat(product.amount)
                        return (
                            <tr id="order_text" key={uuid()}>
                                <td>{product.name}</td>
                                <td>{(product.price * product.amount).toFixed(2)} €</td>
                                <td>
                                    <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
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
        </div>

    )
}