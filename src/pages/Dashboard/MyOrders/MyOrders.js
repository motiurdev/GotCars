import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])

    // fetch my order data
    useEffect(() => {
        fetch(`https://evening-retreat-05338.herokuapp.com/myorder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [user.email, myOrders])

    // booking delete 
    const handleDeleteOrder = (deleteId) => {
        const confirm = window.confirm("Are you sure. You want to delete this?")
        if (confirm) {
            fetch(`https://evening-retreat-05338.herokuapp.com/deleteOrder/${deleteId}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = myOrders.filter(myOrder => myOrder._id !== deleteId)
                        setMyOrders(remainder)
                    }
                })
        }
    }
    return (
        <div className="container mb-5">
            <h1 className="text-center py-5 header-title sub-title">My Order {myOrders.length}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
                {
                    myOrders.map(myOrder => (
                        <div
                            key={myOrder._id}
                            className="card mb-3 ps-0 me-1"
                            style={{ "maxWidth": "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={myOrder?.orderDetail.img} className="img-fluid rounded-start h-100" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">{myOrder?.orderDetail.name}</h5>
                                        <p className="card-text">{myOrder?.orderDetail.des.slice(0, 80)}</p>
                                        {/* booking delete button */}
                                        <h5 className="mb-3 text-muted">Price: ${myOrder?.orderDetail.price}</h5>
                                        <button onClick={() => handleDeleteOrder(myOrder._id)} className="order-btn mb-2 ms-2"><i className="fas fa-trash-alt"></i> Cancel</button>
                                        {/* show status button */}
                                        <button className="ms-2 order-btn"><i className="fas fa-tags"></i> {myOrder.status}</button>
                                        <button className="ms-2 order-btn">{myOrder.payment ?
                                            "Paid"
                                            :
                                            <Link to={`/dashboard/pay/${myOrder._id}`}>Pay</Link>
                                        }</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyOrders;