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
                                    <input ref={inputs[index]} style={{width: '60px'}} defaultValue={product.amount} onChange={e => changeAmount(e,product,index)} />
                                </td>
                                <td> <a href="#" onClick={() => removeFromCart(product)}>Delete</a> </td>
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