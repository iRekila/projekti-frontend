import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

export default function ManageOrders({ url }) {
    const [orders, setOrders] = useState([]);
    const [orderRows, setOrderRows] = useState([]);

    useEffect(() => {
        axios.get(url + 'order/getorders.php')
            .then((response) => {
                const json = response.data;
                setOrders(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
        axios.get(url + 'order/getorderrows.php')
        .then((response) => {
            const json2 = response.data;
            setOrderRows(json2);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [])

    return (
        <div style={{ marginTop: "3em", marginBottom: "3em", width: "45em", display: "block", marginLeft: "auto", marginRight: "auto" }}>
            <h2 id="order" style={{ textAlign: "center", display: "block", marginBottom: "1.5em" }}>MANAGE ORDERS</h2>
            {orders.map((order) => (
                <>
                    <table className='table' style={{ marginTop: "2.5em", marginBottom: "1.5em" }}>
                        <thead>
                            <tr key={uuid()}>
                                <th>Order Number</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={uuid()}>
                                <td>{order.id}</td>
                                <td>{order.firstname} {order.lastname}</td>
                                <td>{order.address} {order.zip} {order.city}</td>
                                <td>{order.order_date}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table' style={{ marginBottom: "6em" }}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>Amount</th>
                                <th>&nbsp;</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderRows.filter(orderRow => orderRow.order_id === order.id).map((filteredOrderRow) => (
                            <tr>
                                <td>{filteredOrderRow.name}</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>{filteredOrderRow.amount} x</td>
                                <td>&nbsp;</td>
                                <td>{filteredOrderRow.price} €</td>
                            </tr>
                            ))}
                        </tbody>
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <th>Total:</th>
                                <th>{order.total_price} €</th>
                            </tr>
                        </tbody>
                    </table>
                </>
            ))}
        </div>
    )
}